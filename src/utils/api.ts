import axios from 'axios';
import {getRefreshToken, removeAccessToken, setAccessToken} from './helpers';

export const API_URL: string = import.meta.env.VITE_API_URL;
export const API_SETTINGS = {
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	}
};


const api = axios.create(API_SETTINGS);
export const registerApi = axios.create(API_SETTINGS);

function createAxiosResponseInterceptor() {
	const interceptor = api.interceptors.response.use(
		(response) => response,
		(error) => {
			// Reject promise if usual error
			if (error.response.status !== 401) {
				return Promise.reject(error);
			}

			api.interceptors.response.eject(interceptor);

			return api
				.post('/token/refresh', {
					refresh_token: getRefreshToken(),
				})
				.then((response) => {

					setAccessToken(response.data.access);
					error.response.config.headers['Authorization'] =
						'Bearer ' + response.data.access;

					return axios(error.response.config);
				})
				.catch((error2) => {
					// Retry failed, clean up and reject the promise
					removeAccessToken();
					return Promise.reject(error2);
				})
				.finally(createAxiosResponseInterceptor); // Re-attach the interceptor by running the method
		}
	);
}

createAxiosResponseInterceptor(); // Execute the method once during start


// todo: retry if 401: https://www.bezkoder.com/react-refresh-token/

export default api;

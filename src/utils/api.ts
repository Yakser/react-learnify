import axios from 'axios';
export const API_URL: string = import.meta.env.VITE_API_URL;

const api = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	}
});

// todo: retry if 401: https://www.bezkoder.com/react-refresh-token/

export default api;

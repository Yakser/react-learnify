import {createAsyncThunk} from '@reduxjs/toolkit';
import {getToken, removeToken, setToken} from './helpers';
import api, {registerApi} from './api';
import {IUser, LoginData} from './types';
import {AxiosError} from 'axios';



export const fetchUserData = createAsyncThunk(
	'auth/fetchUserData',
	async (_, {rejectWithValue}) => {
		try {
			const token = getToken();
			if (token) {
				api.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
			}
			const {data} = await api.get('/auth/users/current');
			return data;
		} catch (e) {
			return rejectWithValue('');
		}
	});


export const logout = createAsyncThunk(
	'auth/logout',
	async () => {
		delete api.defaults.headers.common['Authorization'];
		removeToken();
	}
);

export const register = createAsyncThunk<IUser, IUser>(
	'auth/register',
	async (payload, {rejectWithValue}) => {
		try {
			const response = await registerApi.post<IUser>('/auth/users/', payload);
			return response.data;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				const axiosError = error as AxiosError;
				return rejectWithValue(axiosError.response?.data);
			}
			return rejectWithValue({});
		}
	}
);
export const login = createAsyncThunk<IUser, LoginData>(
	'auth/login',
	async (payload, {dispatch}) => {
		const response = await api.post('/token/', payload);
		setToken(response.data.access);
		api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
		return (await dispatch(fetchUserData())).payload;
	}
);


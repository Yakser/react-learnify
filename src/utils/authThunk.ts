import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAccessToken, removeAccessToken, removeRefreshToken, setAccessToken, setRefreshToken} from './helpers';
import api, {registerApi} from './api';
import {IUser, IUserEditable, LoginData} from './types';
import {AxiosError} from 'axios';
import {AppState, AuthState} from './auth';


export const fetchUserData = createAsyncThunk(
	'auth/fetchUserData',
	async (_, {rejectWithValue}) => {
		try {
			const token = getAccessToken();
			if (token) {
				api.defaults.headers.common['Authorization'] = `Bearer ${getAccessToken()}`;
			}
			const {data} = await api.get('/auth/users/current');
			return data;
		} catch (e) {
			return rejectWithValue('');
		}
	});

export const editUserData = createAsyncThunk<IUser, IUserEditable>(
	'auth/editUserData',
	async (payload, {rejectWithValue, getState}) => {
		try {
			const token = getAccessToken();
			if (token) {
				api.defaults.headers.common['Authorization'] = `Bearer ${getAccessToken()}`;
			}
			const {auth} = getState() as AppState;
			const userId = auth.user.id;
			const {data} = await api.put(`/auth/users/${userId}/`, payload);
			return data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('');
		}
	});


export const logout = createAsyncThunk(
	'auth/logout',
	async () => {
		delete api.defaults.headers.common['Authorization'];
		removeAccessToken();
		removeRefreshToken();
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
		setAccessToken(response.data.access);
		setRefreshToken(response.data.refresh);
		api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
		return (await dispatch(fetchUserData())).payload;
	}
);


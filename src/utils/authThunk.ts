import {createAsyncThunk} from '@reduxjs/toolkit';
import {getToken, removeToken} from './helpers';
import api, {registerApi} from './api';


export const fetchUserData = createAsyncThunk(
	'auth/fetchUserData',
	async (_, {rejectWithValue}) => {
		try {
			api.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
			const {data} = await api.get('/auth/users/current');
			return data;
		} catch (e) {
			return rejectWithValue('');
		}
	});


export const logout = createAsyncThunk(
	'auth/logout',
	async () => {
		removeToken();
	}
);

export const register = createAsyncThunk(
	'auth/register',
	async (payload, {rejectWithValue}) => {
		try {
			// api.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
			// remove token from headers
			const response = await registerApi.post('/auth/users/', payload);
			return response.data;
		} catch (e) {
			return rejectWithValue(e?.response?.data);
		}
	}
);


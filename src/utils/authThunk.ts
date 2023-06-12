import {createAsyncThunk} from '@reduxjs/toolkit';
import {getToken, removeToken, setToken} from './helpers';
import api, {registerApi} from './api';
import {LoginData} from './types';


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

export const register = createAsyncThunk(
	'auth/register',
	async (payload, {rejectWithValue}) => {
		try {
			const response = await registerApi.post('/auth/users/', payload);
			return response.data;
		} catch (e) {
			return rejectWithValue(e?.response?.data);
		}
	}
);
export const login = createAsyncThunk(
	'auth/login',
	async (payload, {dispatch}) => {
		const response = await api.post('/token/', payload);
		setToken(response.data.access);
		api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
		return (await dispatch(fetchUserData())).payload;
	}
);


import {createAsyncThunk} from '@reduxjs/toolkit';
import {getToken, removeToken} from './helpers';
import api from './api';


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

import {createAsyncThunk} from '@reduxjs/toolkit';
import {getToken, removeToken, setToken} from './helpers';
import api from './api';
import {router} from '../App';


export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (_, {rejectWithValue}) => {
	try {
		const accessToken = getToken();
		api.defaults.headers.Authorization = `Bearer ${accessToken}`;
		const response = await api.get('/auth/users/current');
		return {...response.data, accessToken};
	} catch (e) {
		removeToken();
		return rejectWithValue('');
	}
});

export const login = createAsyncThunk('auth/login', async (payload) => {
	const response = await api.post('/token/', payload);
	setToken(response.data.access);
	await router.navigate('/');
	return response.data;
});

export const signOut = createAsyncThunk(
	'auth/signOut',
	async () => {
		removeToken();
		await router.navigate('/');
	});

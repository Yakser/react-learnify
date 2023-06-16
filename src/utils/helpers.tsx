import React, {ReactElement} from 'react';
import ContentLoader from 'react-content-loader';
import {createAsyncThunk} from '@reduxjs/toolkit';
import api from './api';
import {router} from '../App';
import {LoginData} from './types';

export const capitalize = (string: string): string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const get_list_of_content_loaders = (count = 4) => {
	const content_loaders: ReactElement[] = [];
	for (let index = 0; index < count; index++) {
		content_loaders.push(
			<ContentLoader
				width={400}
				height={600}
				speed={2}
				viewBox="0 0 400 460"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
				key={index}
			>
				<rect x="0" y="0" rx="56" ry="56" width="400" height="400"/>
			</ContentLoader>
		);
	}
	return content_loaders;
};

export const addEllipsis = (string: string, length: number) => {
	if (string.length > length) {
		return `${string.slice(0, length - 3).trim()}...`;
	}
	return string;
};

export const camelToUnderscore = (key: string): string => {
	return key.replace(/([A-Z])/g, '_$1').toLowerCase();
};


export const getAccessToken = () => {
	return localStorage.getItem('access_token');
};

export const setAccessToken = (token: string) => {
	localStorage.setItem('access_token', token);
};

export const removeAccessToken = () => {
	localStorage.removeItem('access_token');
};


export const getRefreshToken = () => {
	return localStorage.getItem('refresh_token');
};

export const setRefreshToken = (token: string) => {
	localStorage.setItem('refresh_token', token);
};

export const removeRefreshToken = () => {
	localStorage.removeItem('refresh_token');
};






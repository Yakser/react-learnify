import {createSlice} from '@reduxjs/toolkit';
import {editUserData, fetchUserData, login, logout, register} from './authThunk';
import {IUser} from './types';

export interface AppState {
	auth: AuthState;
}

export interface AuthState {
	user: IUser;
}

const initialState = {
	user: {},
} as AuthState;

export const authSlice = createSlice({
		name: 'auth',
		initialState,
		reducers: {},
		extraReducers: (builder) => {
			builder.addCase(
				fetchUserData.fulfilled, (state, action) => {
					state.user = action.payload;
				}
			);

			builder.addCase(
				fetchUserData.rejected, (state, action) => {
					state.user = {
						id: undefined,
						username: '',
						password: '',
						email: '',
						first_name: '',
						last_name: '',
						about: '',
						favorite_subjects: '',
						achievements: '',
					};
				}
			);

			builder.addCase(
				fetchUserData.pending, (state, action) => {
					state.user = {
						id: undefined,
						username: '',
						password: '',
						email: '',
						first_name: '',
						last_name: '',
						about: '',
						favorite_subjects: '',
						achievements: '',
					};
				}
			);

			builder.addCase(
				editUserData.fulfilled, (state, action) => {
					state.user = action.payload;
				}
			);

			builder.addCase(
				logout.fulfilled, (state) => {
					state.user = {
						id: undefined,
						username: '',
						password: '',
						email: '',
						first_name: '',
						last_name: '',
						about: '',
						favorite_subjects: '',
						achievements: '',
					};
				}
			);

			builder.addCase(
				register.fulfilled, (state, action) => {
					state.user = action.payload;
				}
			);
			builder.addCase(
				login.fulfilled, (state, action) => {
					state.user = action.payload;
				}
			);
		},
	})
;


// export const {} = authSlice.actions;

export default authSlice.reducer;

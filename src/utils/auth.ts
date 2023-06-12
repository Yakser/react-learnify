import {createSlice} from '@reduxjs/toolkit';
import {fetchUserData, login, logout, register} from './authThunk';
import {IUser} from './types';

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
						subjects: '',
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

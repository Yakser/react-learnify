import {createSlice} from '@reduxjs/toolkit';
import {fetchUserData, logout} from './authThunk';
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
						id: null,
						username: '',
						email: '',
						first_name: '',
						last_name: '',
						about: '',
						favorite_subjects: '',
						achievements: '',
					};
				}
			);

		},
	})
;


// export const {} =  authSlice.actions;

export default authSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';
import {fetchUserData, login, signOut} from './authThunk';
import {getToken} from './helpers';

export interface AuthState {
	token: string | null;
	loading: boolean;
	userData: any;
}

const initialState = {
	token: getToken(),
	loading: false,
	userData: {}
} as AuthState;

export const authSlice = createSlice({
		name: 'auth',
		initialState,
		reducers: {},
		extraReducers: (builder) => {
			builder.addCase(
				login.fulfilled, (state, action) => {
					const {access} = action.payload;
					state.token = access;
					state.loading = false;
				}
			);
			builder.addCase(login.pending, (state, action) => {
				state.loading = true;
			});
			builder.addCase(login.rejected, (state, action) => {
					state.loading = false;
				}
			);

			builder.addCase(
				fetchUserData.fulfilled, (state, action) => {
					const {access} = action.payload;
					state.token = access;
					state.loading = false;
				}
			);
			builder.addCase(
				fetchUserData.pending, (state, action) => {
					state.loading = true;
				}
			);
			builder.addCase(
				fetchUserData.rejected, (state, action) => {
					state.loading = false;
					state.userData = {};
					state.token = null;
				}
			);
			builder.addCase(
				signOut.fulfilled, (state, action) => {
					state.token = null;
					state.userData = {};
					state.loading = false;
				}
			);
		},
	})
;


// export const {} =  authSlice.actions;

export default authSlice.reducer;

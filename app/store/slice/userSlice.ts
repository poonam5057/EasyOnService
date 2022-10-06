/* Login Reducer
 * handles login states in the app
 */
import { createSlice } from '@reduxjs/toolkit';

import { LoginState } from 'app/models/reducers/login';
const initialState: LoginState = {
    isLoggedIn: false,
    id: 0,
    username: '',
    password: '',
};

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        onLogin: (state, action) => {
            return {
                ...state,
                isLoggedIn: true,
                ...action.payload,
            };
        },
        onLoginFailed: (state, action) => {
            return {
                ...state,
                isLoggedIn: false,
            };
        },
        logOut: () => {
            return initialState;
        },
    },
});

export const { onLogin, logOut, onLoginFailed } = loginSlice.actions;
export default loginSlice.reducer;

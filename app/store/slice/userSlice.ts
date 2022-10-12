/* Login Reducer
 * handles login states in the app
 */
import { createSlice } from '@reduxjs/toolkit';
interface LoginState {
    isLoggedIn: boolean;
    data: any;
    error: any;
}
const initialState: LoginState = {
    isLoggedIn: false,
    data: null,
    error: null,
};

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        onLoginRequest: (state, action) => {
            return {
                ...state,
            };
        },
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
                error: action.payload,
            };
        },
        onLogOutRequest: () => {
            return initialState;
        },
    },
});

export const { onLogin, onLogOutRequest, onLoginFailed, onLoginRequest } = loginSlice.actions;
export default loginSlice.reducer;

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
        logOut: () => {
            return initialState;
        },
    },
});

export const { onLogin, logOut, onLoginFailed } = loginSlice.actions;
export default loginSlice.reducer;

/* Login Reducer
 * handles login states in the app
 */
import { createSlice } from '@reduxjs/toolkit';
interface ForgotState {
    isLoggedIn: boolean;
    data: any;
    error: any;
}
const initialState: ForgotState = {
    isLoggedIn: false,
    data: null,
    error: null,
};

const forgotPassSlice = createSlice({
    name: 'forgot',
    initialState,
    reducers: {
        onForgotRequest: (state, action) => {
            return {
                ...state,
            };
        },
        onForgot: (state, action) => {
            return {
                ...state,
                isLoggedIn: true,
                ...action.payload,
            };
        },
        onForgotFailed: (state, action) => {
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload,
            };
        },
    },
});

export const { onForgotRequest, onForgot, onForgotFailed } = forgotPassSlice.actions;
export default forgotPassSlice.reducer;

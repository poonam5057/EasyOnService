/* Login Reducer
 * handles login states in the app
 */
import { createSlice } from '@reduxjs/toolkit';
interface ChangePassState {
    data: any;
    error: any;
}
const initialState: ChangePassState = {
    data: null,
    error: null,
};

const changePassSlice = createSlice({
    name: 'change Password',
    initialState,
    reducers: {
        onChangePassRequest: (state, action) => {
            return {
                ...state,
            };
        },
        onChangePass: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        onChangePassFailed: (state, action) => {
            return {
                ...state,
                error: action.payload,
            };
        },
    },
});

export const { onChangePassRequest, onChangePass, onChangePassFailed } = changePassSlice.actions;
export default changePassSlice.reducer;

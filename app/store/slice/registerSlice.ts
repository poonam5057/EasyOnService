import { createSlice } from '@reduxjs/toolkit';

interface registerState {
    data: any;
    error: any;
}

const initialState: registerState = {
    data: null,
    error: null,
};
const registerSlice = createSlice({
    name: 'user register',
    initialState,
    reducers: {
        onRegisterRequest: (state, action) => {
            return {
                ...state,
                data: null,
                error: null,
            };
        },
        onRegister: (state, action) => {
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        },
        onRegisterFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
        onRegisterRemove: (state, action) => {
            return {
                ...state,
                data: null,
                error: null,
            };
        },
    },
});

export const { onRegisterRequest, onRegister, onRegisterFailed, onRegisterRemove } =
    registerSlice.actions;
export default registerSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
interface UserState {
    data: any;
    error: any;
}
const initialState: UserState = {
    data: null,
    error: null,
};

const userGetSlice = createSlice({
    name: 'single user',
    initialState,
    reducers: {
        onUserRequest: () => {
            return {
                data: null,
                error: null,
            };
        },
        onUser: (state, action) => {
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        },
        onUserFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onUserRequest, onUser, onUserFailed } = userGetSlice.actions;
export default userGetSlice.reducer;

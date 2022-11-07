import { createSlice } from '@reduxjs/toolkit';
interface ProfileState {
    data: any;
    error: any;
}
const initialState: ProfileState = {
    data: null,
    error: null,
};

const profileGetSlice = createSlice({
    name: 'Edit Profile',
    initialState,
    reducers: {
        onProfileRequest: (state) => {
            return {
                ...state,
                data: null,
                error: null,
            };
        },
        onProfile: (state, action) => {
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        },
        onProfileFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onProfileRequest, onProfile, onProfileFailed } = profileGetSlice.actions;
export default profileGetSlice.reducer;

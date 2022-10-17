import { createSlice } from '@reduxjs/toolkit';
interface SingleCategoryState {
    data: any;
    error: any;
}
const initialState: SingleCategoryState = {
    data: null,
    error: null,
};

const profileGetSlice = createSlice({
    name: 'Edit Profile',
    initialState,
    reducers: {
        onprofileRequest: () => {
            return {
                data: null,
                error: null,
            };
        },
        onprofile: (state, action) => {
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        },
        onprofileFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onprofileRequest, onprofile, onprofileFailed } = profileGetSlice.actions;
export default profileGetSlice.reducer;

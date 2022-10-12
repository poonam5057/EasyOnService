import { createSlice } from '@reduxjs/toolkit';
interface SingleCategoryState {
    data: any;
    error: any;
}
const initialState: SingleCategoryState = {
    data: null,
    error: null,
};

const singleCategoryGetSlice = createSlice({
    name: 'single category',
    initialState,
    reducers: {
        onSingleCategoryRequest: () => {
            return {
                data: null,
                error: null,
            };
        },
        onSingleCategory: (state, action) => {
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        },
        onSingleCategoryRequestFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onSingleCategoryRequest, onSingleCategory, onSingleCategoryRequestFailed } =
    singleCategoryGetSlice.actions;
export default singleCategoryGetSlice.reducer;

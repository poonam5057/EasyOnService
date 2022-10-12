import { createSlice } from '@reduxjs/toolkit';
interface CategoryState {
    data: any;
    error: any;
}
const initialState: CategoryState = {
    data: null,
    error: null,
};

const CategoryGetSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        onCategoryRequest: () => {
            return {
                data: null,
                error: null,
            };
        },
        onCategory: (state, action) => {
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        },
        onCategoryFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onCategoryRequest, onCategory, onCategoryFailed } = CategoryGetSlice.actions;
export default CategoryGetSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
interface ProductState {
    data: any;
    error: any;
}
const initialState: ProductState = {
    data: null,
    error: null,
};

const ProductGetSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        onProductRequest: () => {
            // console.log('state .....', );
            return {
                data: null,
                error: null,
            };
        },
        onProduct: (state, action) => {
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        },
        onProductFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onProductRequest, onProduct, onProductFailed } = ProductGetSlice.actions;
export default ProductGetSlice.reducer;

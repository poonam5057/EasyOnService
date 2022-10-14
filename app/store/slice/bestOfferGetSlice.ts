import { createSlice } from '@reduxjs/toolkit';
interface BestOfferState {
    data: any;
    error: any;
}
const initialState: BestOfferState = {
    data: null,
    error: null,
};

const bestOfferGetSlice = createSlice({
    name: 'best offer',
    initialState,
    reducers: {
        onBestOfferRequest: () => {
            return {
                data: null,
                error: null,
            };
        },
        onBestOffer: (state, action) => {
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        },
        onBestOfferFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onBestOfferRequest, onBestOffer, onBestOfferFailed } = bestOfferGetSlice.actions;
export default bestOfferGetSlice.reducer;

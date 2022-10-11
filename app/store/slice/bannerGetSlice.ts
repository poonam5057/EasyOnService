import { createSlice } from '@reduxjs/toolkit';
interface BannerState {
    data: any;
    error: any;
}
const initialState: BannerState = {
    data: null,
    error: null,
};

const bannerGetSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        onBannerRequest: () => {
            // console.log('state .....', );
            return {
                data: null,
                error: null,
            };
        },
        onBanner: (state, action) => {
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        },
        onBannerFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onBannerRequest, onBanner, onBannerFailed } = bannerGetSlice.actions;
export default bannerGetSlice.reducer;

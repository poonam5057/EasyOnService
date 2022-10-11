import { createSlice } from '@reduxjs/toolkit';
interface ServiceState {
    data: any;
    error: any;
}
const initialState: ServiceState = {
    data: null,
    error: null,
};

const serviceGetSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        onServiceRequest: () => {
            return {
                data: null,
                error: null,
            };
        },
        onService: (state, action) => {
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        },
        onServiceFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onServiceRequest, onService, onServiceFailed } = serviceGetSlice.actions;
export default serviceGetSlice.reducer;

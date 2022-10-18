/* Login Reducer
 * handles login states in the app
 */
import { createSlice } from '@reduxjs/toolkit';
interface ProjectEState {
    // isLoggedIn: boolean;
    data: any;
    error: any;
}
const initialState: ProjectEState = {
    // isLoggedIn: false,
    data: null,
    error: null,
};

const projectEstimateSlice = createSlice({
    name: 'estimate',
    initialState,
    reducers: {
        onSubmitRequest: (state, action) => {
            return {
                ...state,
            };
        },
        onSubmit: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        onSubmitFailed: (state, action) => {
            return {
                ...state,
                error: action.payload,
            };
        },
        // onLogOutRequest: () => {
        //     return initialState;
        // },
    },
});

export const { onSubmit, onSubmitRequest, onSubmitFailed } = projectEstimateSlice.actions;
export default projectEstimateSlice.reducer;

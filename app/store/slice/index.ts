/*
 * combines all th existing reducers
 */
import loadingSlice from './loadingSlice';
import userSlice from './userSlice';
import registerSlice from './registerSlice';
import themeSlice from './themeSlice';
import forgotPassSlice from './forgotPassSlice';
import { combineReducers } from '@reduxjs/toolkit';

const reducers = {
    loading: loadingSlice,
    theme: themeSlice,
    user: userSlice,
    register: registerSlice,
    forgot: forgotPassSlice,
};

// Exports

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

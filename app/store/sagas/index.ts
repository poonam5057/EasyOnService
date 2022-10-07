/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import registerSaga from './registerSaga';
import forgotPassSaga from './forgotPassSaga';
import { onLoginRequest } from '../slice/userSlice';
import { onRegisterRequest } from '../slice/registerSlice';
import { onForgotRequest } from '../slice/forgotPassSlice';

export default function* watch() {
    yield all([takeEvery(onLoginRequest, loginSaga)]);
    yield all([takeEvery(onRegisterRequest, registerSaga)]);
    yield all([takeEvery(onForgotRequest, forgotPassSaga)]);
}

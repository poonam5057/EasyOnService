/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import registerSaga from './registerSaga';
import forgotPassSaga from './forgotPassSaga';
import changePassSaga from './changePassSaga';
import bannerGetSaga from './bannerGetSaga';
import serviceGetSaga from './serviceGetSaga';
import productGetSaga from './productGetSaga';
import { onLoginRequest } from '../slice/userSlice';
import { onRegisterRequest } from '../slice/registerSlice';
import { onForgotRequest } from '../slice/forgotPassSlice';
import { onChangePassRequest } from '../slice/changePassSlice';
import { onBannerRequest } from '../slice/bannerGetSlice';
import { onServiceRequest } from '../slice/serviceGetSlice';
import { onProductRequest } from '../slice/productGetSlice';

export default function* watch() {
    yield all([takeEvery(onLoginRequest, loginSaga)]);
    yield all([takeEvery(onRegisterRequest, registerSaga)]);
    yield all([takeEvery(onForgotRequest, forgotPassSaga)]);
    yield all([takeEvery(onChangePassRequest, changePassSaga)]);
    yield all([takeEvery(onBannerRequest, bannerGetSaga)]);
    yield all([takeEvery(onServiceRequest, serviceGetSaga)]);
    yield all([takeEvery(onProductRequest, productGetSaga)]);
}

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
import categoryGetSaga from './categoryGetSaga';
import singleCategoryGetSaga from './singleCategorySaga';
import { onLoginRequest } from '../slice/userSlice';
import { onRegisterRequest } from '../slice/registerSlice';
import { onForgotRequest } from '../slice/forgotPassSlice';
import { onChangePassRequest } from '../slice/changePassSlice';
import { onBannerRequest } from '../slice/bannerGetSlice';
import { onServiceRequest } from '../slice/serviceGetSlice';
import { onCategoryRequest } from '../slice/categoryGetSlice';
import { onSingleCategoryRequest } from '../slice/singleCategorySlice';

export default function* watch() {
    yield all([takeEvery(onLoginRequest, loginSaga)]);
    yield all([takeEvery(onRegisterRequest, registerSaga)]);
    yield all([takeEvery(onForgotRequest, forgotPassSaga)]);
    yield all([takeEvery(onChangePassRequest, changePassSaga)]);
    yield all([takeEvery(onBannerRequest, bannerGetSaga)]);
    yield all([takeEvery(onServiceRequest, serviceGetSaga)]);
    yield all([takeEvery(onCategoryRequest, categoryGetSaga)]);
    yield all([takeEvery(onSingleCategoryRequest, singleCategoryGetSaga)]);
}

import { put, call } from 'redux-saga/effects';
import forgotPasswordData from 'app/services/forgotPassword';
import { Alert } from 'react-native';
import { onForgot, onForgotFailed } from 'app/store/slice/forgotPassSlice';

export default function* forgotAsync(action: any): any {
    console.log('Forgot action ## ', action);
    try {
        const response = yield call(forgotPasswordData, action.payload.email);
        if (response.status === 200) {
            yield put(onForgot(response.data));
        } else {
            yield put(onForgotFailed(response.data));
            Alert.alert('Forgot Password Failed.', response.data.message);
        }
    } catch (error) {
        Alert.alert('Forgot Password Failed', error?.response.data.message);
        yield put(onForgotFailed(error?.response?.data));
    }
}

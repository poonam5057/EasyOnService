import { put, call } from 'redux-saga/effects';
import changePasswordData from 'app/services/changePassword';
import { Alert } from 'react-native';
import { onChangePass, onChangePassFailed } from 'app/store/slice/changePassSlice';

export default function* changePassAsync(action: any): any {
    console.log('Change pass action ## :: ', action);
    try {
        const response = yield call(
            changePasswordData,
            action.payload.currentPassword,
            action.payload.newPassword,
            action.payload.confirmPassword,
        );
        if (response.status === 200) {
            yield put(onChangePass(response.data));
        } else {
            yield put(onChangePassFailed(response.data));
            Alert.alert('Change Password Failed.', response.data.message);
        }
    } catch (error) {
        Alert.alert('Change Password Failed', error?.response.data.message);
        yield put(onChangePassFailed(error?.response?.data));
    }
}

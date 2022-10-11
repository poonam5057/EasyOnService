import { put, call } from 'redux-saga/effects';
import registerUser from 'app/services/registerUser';
import { Alert } from 'react-native';
import { onRegister, onRegisterFailed } from 'app/store/slice/registerSlice';

export default function* registerAsync(action: any): any {
    console.log('register action ## ', action);
    try {
        const response = yield call(
            registerUser,
            action.payload.name,
            action.payload.email,
            action.payload.password,
            action.payload.phonenumber,
            action.payload.age,
            action.payload.address,
        );
        if (response.status === 200) {
            yield put(onRegister(response.data));
           // Alert.alert('Register success.', response.data.message);
        } else {
            yield put(onRegisterFailed(response.data));
            Alert.alert('Register Failed.', response.data.message);
        }
    } catch (error) {
        Alert.alert('Register Failed :::', error?.response.data.message);
        yield put(onRegisterFailed(error?.response?.data));
    }
}

/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';

import { onLogin, onLoginFailed } from '../slice/userSlice';
import loginUser from 'app/services/loginUser';
import { Alert } from 'react-native';

// Our worker Saga that logins the user
export default function* loginAsync(action: any): any {
    console.log('action 111111111 :::', action);
    try {
        const response = yield call(loginUser, action.payload.email, action.payload.password);
        if (response.status === 200) {
            yield put(onLogin(response.data));
        } else {
            yield put(onLoginFailed(response.data));
            Alert.alert('Login Failed.', response.data.message);
        }
    } catch (error) {
        Alert.alert('Login Failed.', error?.response.data.message);
        yield put(onLoginFailed(error?.response?.data));
    }
}

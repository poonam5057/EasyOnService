/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';

import * as loginActions from 'app/store/slice/userSlice';
import loginUser from 'app/services/loginUser';
import { Alert } from 'react-native';

// Our worker Saga that logins the user
export default function* loginAsync(action: any): any {
    try {
        console.log('loginAsync', action);
        const response = yield call(loginUser, action.payload.username, action.payload.password);
        if (response.status === 200) {
            yield put(loginActions.onLogin(response.data));
        } else {
            yield put(loginActions.onLoginFailed(response.data));
            Alert.alert('Login Failed.', response.data.message);
        }
    } catch (error) {
        yield put(loginActions.onLoginFailed(error));
        // Alert.alert('Login Failed..', error?.message);
    }
}

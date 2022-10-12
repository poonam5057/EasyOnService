/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';

import { onLogOutRequest } from '../slice/userSlice';
import logoutUser from 'app/services/logoutGet';

// Our worker Saga that logins the user
export default function* logoutAsync(): any {
    try {
        const response = yield call(logoutUser);
    } catch (error) {
        console.log('error ??', error);
    }
}

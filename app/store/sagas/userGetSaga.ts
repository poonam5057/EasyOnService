/* Redux saga class
 * get the banner from the server
 */
import { put, call } from 'redux-saga/effects';
import getSingleUserData from 'app/services/userGet';
import { Alert } from 'react-native';
import { onUser, onUserFailed } from 'app/store/slice/userGetSlice';

export default function* singleUserAsync(action: any): any {
    try {
        const response = yield call(getSingleUserData, action.payload);
        //  console.log("saga response", response);
        if (response.status === 200) {
            yield put(onUser(response.data));
        } else {
            yield put(onUserFailed(response.data));
        }
    } catch (error) {
        yield put(onUserFailed(error?.response?.data));
    }
}

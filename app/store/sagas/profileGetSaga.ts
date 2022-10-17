/* Redux saga class
 * get the banner from the server
 */
import { put, call } from 'redux-saga/effects';
import getProfileData from 'app/services/profileGet';
import { Alert } from 'react-native';
import { onprofile, onprofileFailed } from 'app/store/slice/profileGetSlice';

export default function* categoryAsync(action: any): any {
    try {
        const response = yield call(getProfileData, action.payload);

        if (response.status === 200) {
            yield put(onprofile(response.data));
        } else {
            yield put(onprofileFailed(response.data));
        }
    } catch (error) {
        yield put(onprofileFailed(error?.response?.data));
    }
}

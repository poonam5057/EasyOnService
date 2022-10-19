/* Redux saga class
 * get the banner from the server
 */
import { put, call } from 'redux-saga/effects';
import getProfileData from 'app/services/profileGet';
import { Alert } from 'react-native';
import { onProfile, onProfileFailed } from 'app/store/slice/profileGetSlice';

export default function* categoryAsync(action: any): any {
    try {
        const response = yield call(getProfileData, action.payload);

        if (response.status === 200) {
            yield put(onProfile(response.data));
        } else {
            yield put(onprofileFailed(response.data));
        }
    } catch (error) {
        yield put(onProfileFailed(error?.response?.data));
    }
}

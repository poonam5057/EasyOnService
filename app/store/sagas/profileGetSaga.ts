/* Redux saga class
 * get the banner from the server
 */
import { put, call } from 'redux-saga/effects';
import editProfileData from 'app/services/profileGet';
import { Alert } from 'react-native';
import { onProfile, onProfileFailed } from 'app/store/slice/profileGetSlice';

export default function* editProfileAsync(action: any): any {
    try {
        console.log('action - ', action);
        const response = yield call(editProfileData, action.payload);
        console.log('res ', response);
        if (response.status === 200) {
            yield put(onProfile(response.data));
        } else {
            yield put(onProfileFailed(response.data));
        }
    } catch (error) {
        yield put(onProfileFailed(error?.response?.data));
    }
}

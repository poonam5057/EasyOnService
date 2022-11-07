/* Redux saga class
 * get the banner from the server
 */
import { put, call } from 'redux-saga/effects';
import editProfileData from 'app/services/profileGet';
import { Alert } from 'react-native';
import { onProfile, onProfileFailed } from 'app/store/slice/profileGetSlice';

export default function* profileGetSagaAsync(id:number, payload:any, action: any): any {
    try {
        console.log("saga id ++++", payload);
        console.log('action - ', action.payload);
        const response = yield call(editProfileData, id, action.payload);
        console.log('res ', response);
        if (response.status === 200) {
            yield put(onProfile(response.data));
            Alert.alert("profile success", response.data);
        } else {
            yield put(onProfileFailed(response.data));
            Alert.alert("profile failed", response.data);
        }
    } catch (error) {
        yield put(onProfileFailed(error?.response?.data));
        
    }
}

/* Redux saga class
 * get the banner from the server
 */
import { put, call } from 'redux-saga/effects';
import getServiceData from 'app/services/serviceGet';
import { Alert } from 'react-native';
import { onService, onServiceFailed } from 'app/store/slice/serviceGetSlice';

export default function* serviceAsync(): any {
    try {
        const response = yield call(getServiceData);
        if (response.status === 200) {
            yield put(onService(response.data));
        } else {
            yield put(onServiceFailed(response.data));
            // Alert.alert('Banner Success.', response.data.message);
        }
    } catch (error) {
        // Alert.alert('Banner Failed.', error?.response.data.message);
        yield put(onServiceFailed(error?.response?.data));
    }
}

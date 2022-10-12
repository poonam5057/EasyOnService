/* Redux saga class
 * get the banner from the server
 */
import { put, call } from 'redux-saga/effects';
import getSingleCategoryData from 'app/services/singleCategoryGet';
import { Alert } from 'react-native';
import {
    onSingleCategory,
    onSingleCategoryRequestFailed,
} from 'app/store/slice/singleCategorySlice';

export default function* singleCategoryAsync(action: any): any {
    try {
        const response = yield call(getSingleCategoryData, action.payload);

        if (response.status === 200) {
            yield put(onSingleCategory(response.data));
        } else {
            yield put(onSingleCategoryRequestFailed(response.data));
        }
    } catch (error) {
        yield put(onSingleCategoryRequestFailed(error?.response?.data));
    }
}

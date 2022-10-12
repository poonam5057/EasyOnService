/* Redux saga class
 * get the banner from the server
 */
import { put, call } from 'redux-saga/effects';
import getCategoryData from 'app/services/categoryGet';
import { Alert } from 'react-native';
import { onCategory, onCategoryFailed } from 'app/store/slice/categoryGetSlice';

export default function* categoryAsync(action: any): any {
    try {
        const response = yield call(getCategoryData, action.payload);

        if (response.status === 200) {
            yield put(onCategory(response.data));
        } else {
            yield put(onCategoryFailed(response.data));
        }
    } catch (error) {
        yield put(onCategoryFailed(error?.response?.data));
    }
}

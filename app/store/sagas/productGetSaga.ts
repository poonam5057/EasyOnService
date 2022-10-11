/* Redux saga class
 * get the banner from the server
 */
import { put, call } from 'redux-saga/effects';
import getProductData from 'app/services/productGet';
import { Alert } from 'react-native';
import { onProduct, onProductFailed } from 'app/store/slice/productGetSlice';

export default function* bannerAsync(): any {
    try {
        const response = yield call(getProductData);

        if (response.status === 200) {
            yield put(onProduct(response.data));
        } else {
            yield put(onProductFailed(response.data));
            // Alert.alert('Banner Success.', response.data.message);
        }
    } catch (error) {
        // Alert.alert('Banner Failed.', error?.response.data.message);
        yield put(onProductFailed(error?.response?.data));
    }
}

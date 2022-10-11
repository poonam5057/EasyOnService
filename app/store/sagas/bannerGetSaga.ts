/* Redux saga class
 * get the banner from the server
 */
import { put, call } from 'redux-saga/effects';
import getBannerData from 'app/services/bannerGet';
import { Alert } from 'react-native';
import { onBanner, onBannerFailed } from 'app/store/slice/bannerGetSlice';

export default function* bannerAsync(): any {
    try {
        const response = yield call(getBannerData);

        if (response.status === 200) {
            yield put(onBanner(response.data));
        } else {
            yield put(onBannerFailed(response.data));
            // Alert.alert('Banner Success.', response.data.message);
        }
    } catch (error) {
        // Alert.alert('Banner Failed.', error?.response.data.message);
        yield put(onBannerFailed(error?.response?.data));
    }
}

/* Redux saga class
 * get the banner from the server
 */
import { put, call } from 'redux-saga/effects';
import getBestOfferData from 'app/services/bestOfferGet';
import { Alert } from 'react-native';
import { onBestOffer, onBestOfferFailed } from 'app/store/slice/bestOfferGetSlice';

export default function* bestOfferAsync(): any {
    try {
        const response = yield call(getBestOfferData);

        if (response.status === 200) {
            yield put(onBestOffer(response.data));
        } else {
            yield put(onBestOfferFailed(response.data));
            // Alert.alert('Banner Success.', response.data.message);
        }
    } catch (error) {
        // Alert.alert('Banner Failed.', error?.response.data.message);
        yield put(onBestOfferFailed(error?.response?.data));
    }
}

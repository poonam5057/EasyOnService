import { put, call } from 'redux-saga/effects';

import { onSubmit,onSubmitFailed } from '../slice/projectEstimateSlice';
import projectEst from 'app/services/projectEstimate';
import { Alert } from 'react-native';

// Our worker Saga that logins the user
export default function* projectEstimation(action: any): any {
    try {
        const response = yield call(projectEst, action.payload.name, action.payload.city, action.payload.email,action.payload.phonenumber, action.payload.message);
        //  console.log("Response>>>>",response)
        if (response.status === 200) {
            yield put(onSubmit(response.data));
            Alert.alert('Submit Success',response.data.message);
            console.log("Response-msg",response.data.message)
        } else {
            yield put(onSubmitFailed(response.data));
            Alert.alert('Submit Failed.', response.data.message);
        }
    } catch (error) {
        yield put(onSubmitFailed(error?.response?.data));
        Alert.alert('Submit Failed.');
    }
}
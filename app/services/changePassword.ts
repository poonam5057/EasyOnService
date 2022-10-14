import { apiClient, allApi } from 'app/services/client';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { service } from './apiConfig';

export default function changePasswordData(
    currentPassword: string,
    newPassword: string,
    confirmPassword: string,
) {
    return service.post(allApi.CHANGEPASSWORD, {
        currentPassword,
        newPassword,
        confirmPassword,
    });
    // return service.post(allApi.CHANGEPASSWORD, {
    //     currentPassword: currentPassword,
    //     newPassword: newPassword,
    //     confirmPassword: confirmPassword,
    // });
}

import { apiClient, allApi } from 'app/services/client';
import axios from 'axios';
export default function changePasswordData(
    currentPassword: string,
    newPassword: string,
    confirmPassword: string,
) {
    return apiClient.post(
        allApi.CHANGEPASSWORD,
        {
            currentPassword: currentPassword,
            newPassword: newPassword,
            confirmPassword: confirmPassword,
        },
        // (
        //     axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

        // )
    );
}

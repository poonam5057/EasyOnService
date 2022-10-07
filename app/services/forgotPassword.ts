import { apiClient, allApi } from 'app/services/client';

export default function forgotPasswordData(email: string) {
    return apiClient.post(allApi.FORGOTPASSWORD, { email: email });
}

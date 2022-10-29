import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function forgotPasswordData(email: string) {
    return service.post(allApi.FORGOTPASSWORD, { email: email });
}

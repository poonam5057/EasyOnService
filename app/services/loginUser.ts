import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function loginUser(username: string, password: string) {
    return service.post(allApi.LOGIN, { email: username, password: password });
}

import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function logoutUser() {
    return service.post(allApi.LOGOUT);
}

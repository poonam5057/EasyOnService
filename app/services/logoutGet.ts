import { apiClient, allApi } from 'app/services/client';

export default function logoutUser() {
    return apiClient.post(allApi.LOGOUT);
}

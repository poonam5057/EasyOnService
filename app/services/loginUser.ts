import { apiClient, allApi } from 'app/services/client';

export default function loginUser(username: string, password: string) {
    return apiClient.post(allApi.LOGIN, { email: username, password: password });
}

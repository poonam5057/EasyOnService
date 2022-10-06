import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function loginUser(username: string, password: string) {
    console.log('loginUser', username, password);
    return apiClient.post(ApiConfig.LOGIN, { username, password });
}

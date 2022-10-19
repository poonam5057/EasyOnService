import { apiClient, allApi } from 'app/services/client';

export default function getSingleUserData(id: number) {
    return apiClient.get(allApi.USER + id);
}

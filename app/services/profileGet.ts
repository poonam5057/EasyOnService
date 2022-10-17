import { apiClient, allApi } from 'app/services/client';

export default function getProfileData(id: number) {
    return apiClient.get(allApi.Profile + id);
}
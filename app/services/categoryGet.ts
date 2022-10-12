import { apiClient, allApi } from 'app/services/client';

export default function getCategoryData(id: number) {
    return apiClient.get(allApi.CATEGORIES + id);
}

import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function getCategoryData(id: number) {
    return service.get(allApi.CATEGORIES + id);
}

import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function getSingleUserData(id: number) {
    return service.get(allApi.USER + id);
}

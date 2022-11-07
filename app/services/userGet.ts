import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function getSingleUserData(userId: number) {
    console.log("id ::::::###", userId);
    return service.get(allApi.SINGLEUSER + userId);
}

import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function getSingleUserData(id: number) {
    console.log("id ::::::###", id)
    return service.get(allApi.SINGLEUSER + id);
}

import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function getSingleCategoryData(id: number) {
    return service.get(allApi.SINGLECATEGORY + id);
}

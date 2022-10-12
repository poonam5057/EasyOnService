import { apiClient, allApi } from 'app/services/client';

export default function getSingleCategoryData(id: number) {
    return apiClient.get(allApi.SINGLECATEGORY + id);
}

import { apiClient, allApi } from 'app/services/client';
export default function getProductData() {
    return apiClient.get(allApi.PRODUCT);
}

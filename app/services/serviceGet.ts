import { apiClient, allApi } from 'app/services/client';
export default function getServiceData() {
    return apiClient.get(allApi.SERVICES);
}

import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function getServiceData() {
    return service.get(allApi.SERVICES);
}

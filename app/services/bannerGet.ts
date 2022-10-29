import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';

export default function getBannerData() {
    return service.get(allApi.BANNERGET);
}

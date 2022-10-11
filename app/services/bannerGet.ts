import { apiClient, allApi } from 'app/services/client';
export default function getBannerData() {
    return apiClient.get(allApi.BANNERGET);
}

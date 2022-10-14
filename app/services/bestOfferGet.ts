import { apiClient, allApi } from 'app/services/client';
export default function getBestOfferData() {
    return apiClient.get(allApi.BESTOFFER);
}

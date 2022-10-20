import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function getBestOfferData() {
    return service.get(allApi.BESTOFFER);
}

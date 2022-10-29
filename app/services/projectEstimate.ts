import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function projectEst(
    name: string,
    city: string,
    email: string,
    phonenumber: number,
    message: string,
) {
    return service.post(allApi.PROJECTESTIMATE, {
        name: name,
        city: city,
        email: email,
        phonenumber: phonenumber,
        message: message,
    });
}

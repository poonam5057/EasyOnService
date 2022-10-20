import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function registerUser(
    name: string,
    email: string,
    password: string,
    phone: number,
    age: number,
    address: string,
) {
    return service.post(allApi.REGISTER, {
        name: name,
        email: email,
        password: password,
        phonenumber: phone,
        age: age,
        address: address,
    });
}

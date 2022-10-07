import { apiClient, allApi } from 'app/services/client';

export default function registerUser(
    name: string,
    email: string,
    password: string,
    phone: number,
    age: number,
    address: string,
) {
    return apiClient.post(allApi.REGISTER, {
        name: name,
        email: email,
        password: password,
        phonenumber: phone,
        age: age,
        address: address,
    });
}

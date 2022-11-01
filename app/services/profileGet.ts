import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';

export default function editProfileData(
    data: any,
    // id: number,
    // name: string,
    // email: string,
    // password: string,
    // phone: number,
    // age: number,
    // address: string,
) {
    return service.put(allApi.PROFILE + data.id, {
        name: data.name,
        email: data.email,
        password: data.password,
        phonenumber: data.phone,
        age: data.age,
        address: data.address,
    });
}

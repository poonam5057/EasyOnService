import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';

export default function editProfileData(
    userId: number,
    data: any,
    // name: string,
    // email: string,
    // password: string,
    // phone: number,
    // age: number,
    // address: string,
) {
   
    console.log("iiiiiii+++userId++++ id", userId);
    return service.patch(allApi.PROFILE + userId, {
        name: data.name,
        email: data.email,
        //password: data.password,
        phonenumber: data.phone,
        age: data.age,
        address:data.address,
    });
    
}

import { apiClient, allApi } from 'app/services/client';

export default function projectEst(name: string, city: string,email:string,phonenumber:number,message:string) {
    return apiClient.post(allApi.PROJECTESTIMATE, { name: name, city: city, email: email,phonenumber: phonenumber, message:message});
}

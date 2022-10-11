import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const token = AsyncStorage.getItem('userToken');
// const tempToken = token.replace(/['"]/g, '');

console.log('token :::@@@:::', token);
const apiClient = axios.create({
    baseURL: 'https://504d-122-170-21-224.in.ngrok.io/api/',
    responseType: 'json',
    withCredentials: true,
    // headers: {
    //     Authorization: `Bearer ${token}`,
    // },
});

const allApi = {
    LOGIN: 'user/Login',
    REGISTER: 'user/Create',
    FORGOTPASSWORD: 'user/forgot_password',
    CHANGEPASSWORD: '/user/change_password',
    BANNERGET: 'banner/getall',
    SERVICES: 'service/getallservice',
    PRODUCT: 'Product/getall',
};

apiClient.defaults.headers;

export { apiClient, allApi };

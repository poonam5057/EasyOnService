import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://2260-122-170-53-185.in.ngrok.io/api/',
    responseType: 'json',
    withCredentials: true,
});

const allApi = {
    LOGIN: 'user/Login',
    REGISTER: 'user/Create',
    FORGOTPASSWORD: 'user/forgot_password',
};

export { apiClient, allApi };

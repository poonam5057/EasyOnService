import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://9e60-122-170-53-185.in.ngrok.io/api/',
    responseType: 'json',
    withCredentials: true,
});

const allApi = {
    LOGIN: 'user/Login',
};

export { apiClient, allApi };

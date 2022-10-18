import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://221f-106-215-21-7.in.ngrok.io/api/',
    responseType: 'json',
    withCredentials: true,
});

const allApi = {
    LOGIN: 'user/Login',
    REGISTER: 'user/Create',
    FORGOTPASSWORD: 'user/forgot_password',
    CHANGEPASSWORD: '/user/change_password',
    BANNERGET: 'banner/getall',
    SERVICES: 'service/getallservice',
    CATEGORIES: 'categories/',
    SINGLECATEGORY: 'categories/single-categories/',
    LOGOUT: 'user/logout',
    BESTOFFER: 'bestOffers/getall',
    PROJECTESTIMATE:'projectEstimation/Create'
};

export { apiClient, allApi };

import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://04c0-223-226-208-168.in.ngrok.io/api/',
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
    PROJECTESTIMATE: 'projectEstimation/Create',
    SINGLEUSER: 'user/',
    PROFILE: 'user/',
};

export { apiClient, allApi };

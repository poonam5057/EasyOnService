import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://60bd-27-57-175-102.in.ngrok.io/api/',
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
    //PRODUCT: 'Product/getall',
};

export { apiClient, allApi };

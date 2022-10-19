import axios from 'axios';
import { AsyncStorage } from 'react-native';

const baseURL = 'https://221f-106-215-21-7.in.ngrok.io/api';

const service = axios.create({ baseURL });

async function saveToken(access_token: any, refresh_token: any) {
    await AsyncStorage.setItem('access_token', access_token);
    await AsyncStorage.setItem('refresh_token', refresh_token);
}
// function destroyToken() {
//     AsyncStorage.removeItem('access_token');
//     AsyncStorage.removeItem('refresh_token');
// }
// function refresh() {
//     return new Promise((resolve, reject) => {
//         service
//             .post('/api/v1/refresh', {
//                 refresh_token: AsyncStorage.getItem('refresh_token'),
//             })
//             .then((response) => {
//                 saveToken(response.data.access_token, response.data.refresh_token);
//                 return resolve(response.data.access_token);
//             })
//             .catch((error) => {
//                 destroyToken();
//                 // window.location.replace('/logout');
//                 return reject(error);
//             });
//     });
// }

service.interceptors.response.use(
    (res) => res,
    (error) => {
        const status = error.response ? error.response.status : null;
        if (status === 401) {
            // window.location.replace('/logout');
            AsyncStorage.removeItem('access_token');
            AsyncStorage.removeItem('refresh_token');
        }
        // status might be undefined
        if (!status) {
            //  refresh();
        }
        return Promise.reject(error);
    },
);

service.interceptors.request.use(async (config) => {
    const access_token = await AsyncStorage.getItem('access_token');
    console.log('access_token', access_token);
    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
});

export { service };

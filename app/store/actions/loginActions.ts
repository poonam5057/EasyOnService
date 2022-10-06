/*
 * Reducer actions related with login
 */
import * as types from './types';
import { createAction } from '@reduxjs/toolkit';

export const requestLogin = createAction(
    types.LOGIN_REQUEST,
    (username: string, password: string) => ({
        payload: {
            username,
            password,
        },
    }),
);

// export const onLogin = createAction(types.LOGIN_SUCCESS, (data: any) => ({
//     payload: {
//         data,
//     },
// }));

// export const loginFailed = createAction(types.LOGIN_FAILURE, (error: any) => ({
//     payload: {
//         error,
//     },
// }));

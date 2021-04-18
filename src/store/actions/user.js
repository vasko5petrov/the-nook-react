import UserApi from 'api/UserApi';
export const GET_USER = 'user/GET_USER';
export const LOGOUT = 'user/LOGOUT';

export const getUser = () => ({
    type: GET_USER,
    payload: UserApi.getUser()
});

export const logout = () => ({
    type: LOGOUT,
    payload: UserApi.logout()
});
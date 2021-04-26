import UserApi from 'api/UserApi';
export const GET_USER = 'user/GET_USER';
export const VERIFY_EMAIL = 'user/VERIFY_EMAIL';
export const LOGOUT = 'user/LOGOUT';

export const getUser = () => ({
    type: GET_USER,
    payload: UserApi.getUser()
});

export const verifyEmail = (data) => ({
    type: VERIFY_EMAIL,
    payload: UserApi.verifyEmail(data)
});

export const logout = () => ({
    type: LOGOUT,
    payload: UserApi.logout()
});
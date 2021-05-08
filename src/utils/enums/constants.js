import { List } from 'immutable';

export const navItems = List([
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/data',
        title: 'Data',
        protectedRoute: true
    }
]);

export const REGISTER_FIELDS = List([
    'firstName',
    'lastName',
    'email',
    'password',
    'passwordConfirmation'
]);

export const LOGIN_FIELDS = List(['email', 'password']);

export const PRELOGIN_PATHS = List(['/login', '/signup', '/forgot-password']);
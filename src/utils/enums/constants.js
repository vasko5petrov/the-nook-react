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
    'FirstName',
    'LastName',
    'Email',
    'Password',
    'PasswordConfirmation'
]);

export const LOGIN_FIELDS = List(['Email', 'Password']);
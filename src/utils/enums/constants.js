import { List } from 'immutable';

export const navItems = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/data',
        title: 'Data'
    }
];

export const REGISTER_FIELDS = List([
    'FirstName',
    'LastName',
    'Email',
    'Password',
    'PasswordConfirmation'
]);

export const LOGIN_FIELDS = List(['Email', 'Password']);
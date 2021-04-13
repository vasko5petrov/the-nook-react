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

export const REGISTER_PAGE_FIELDS = List([
    'FirstName', 'LastName', 'Email', 'Password', 'PasswordConfirmation'
]);
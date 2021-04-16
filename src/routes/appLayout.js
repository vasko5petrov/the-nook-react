import { lazy } from 'react';
const DataView = lazy(() => import('components/views/DataView'));
const Home = lazy(() => import('components/views/Home'));
const Register = lazy(() => import('components/views/Register'));
const Login = lazy(() => import('components/views/Login'));

const mainLayout = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/signup',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/data',
        component: DataView
    }
];

export default mainLayout;

import { lazy } from 'react';
const DataView = lazy(() => import('components/views/DataView'));
const Home = lazy(() => import('components/views/Home'));
const Register = lazy(() => import('components/views/Register'));

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
        path: '/data',
        component: DataView
    }
];

export default mainLayout;

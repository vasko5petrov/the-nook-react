import { lazy } from 'react';

const Home = lazy(() => import('components/views/Home'));
const DataView = lazy(() => import('components/views/DataView'));
const Profile = lazy(() => import('components/views/Profile'));
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
        component: DataView,
        protectedRoute: true
    },
    {
        path: '/profile',
        component: Profile,
        protectedRoute: true
    }
];

export default mainLayout;

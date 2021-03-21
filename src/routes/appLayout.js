import { lazy } from 'react';
const DataView = lazy(() => import('components/views/DataView'));
const Home = lazy(() => import('components/views/Home'));

const mainLayout = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/data',
        component: DataView
    }
];

export default mainLayout;

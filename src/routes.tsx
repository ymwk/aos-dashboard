import { lazy } from 'react';
import Layout from '@pages/_layout';

// 아카이브관리
// const Dashboard = lazy(() => import('@components/instance/DashboardTab1'));
const Dashboard = lazy(() => import('@pages/dashboard/DashboardPage'));

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
];

export const pages = [{ route: '/' }];

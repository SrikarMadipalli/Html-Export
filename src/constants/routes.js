import { lazy } from 'react';

const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: lazy(() => import('../components/Dashboard')),
    label: 'Dashboard'
  }
];

export default routes;
import type { RouteObject } from 'react-router-dom';
import AppLayout from '@/presentation/layouts/app-layout';
import DashboardPage from '@/presentation/pages/app/dashboard';

export const DashboardRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
    ],
  },
];

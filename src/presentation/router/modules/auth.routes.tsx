import type { RouteObject } from 'react-router-dom';
import AuthLayout from '@/presentation/layouts/auth-layout';
import LoginPage from '@/presentation/pages/auth/LoginPage';

export const AuthRoutes: RouteObject[] = [
  {
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: LoginPage,
      },
    ],
  },
];

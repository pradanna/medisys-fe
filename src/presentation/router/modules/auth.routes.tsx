import type { RouteObject } from 'react-router-dom';
import AuthLayout from '@/presentation/layouts/auth-layout';
import LoginPage from '@/presentation/pages/auth/login';
import ForgotPasswordPage from '@/presentation/pages/auth/forgot-password';

export const AuthRoutes: RouteObject[] = [
  {
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: LoginPage,
      },
      {
        path: '/forgot-password',
        Component: ForgotPasswordPage
      }
    ],
  },
];

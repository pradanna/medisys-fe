import { createBrowserRouter } from 'react-router-dom';
import {
  AuthRoutes,
  DashboardRoutes,
  MasterDataRoutes,
} from '@/presentation/router/modules';
import PageNotFound from '@/presentation/pages/not-found';
import PageError from '@/presentation/pages/errors';

export const appRouter = createBrowserRouter([
  {
    path: '',
    errorElement: <PageError />,
    children: [...AuthRoutes, ...DashboardRoutes, ...MasterDataRoutes],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

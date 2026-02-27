import { createBrowserRouter } from 'react-router-dom';
import { AuthRoutes, MasterDataRoutes } from '@/presentation/router/modules';
import PageNotFound from '@/presentation/pages/not-found';
import PageError from '@/presentation/pages/errors';
import DashboardPage from '@/presentation/pages/app/dashboard';

const DashboardRoutes = [
  {
    path: 'dashboard',
    element: <DashboardPage />,
  },
];

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

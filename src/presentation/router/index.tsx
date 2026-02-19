import { createBrowserRouter } from 'react-router-dom';
import {
  AuthRoutes,
  DashboardRoutes,
  MasterDataRoutes,
} from '@/presentation/router/modules';

export const appRouter = createBrowserRouter([
  {
    path: '',
    children: [...AuthRoutes, ...DashboardRoutes, ...MasterDataRoutes],
  },
]);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { appRouter } from '@/presentation/router';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

const queryClient = new QueryClient();
const container = document.getElementById('root')!;
createRoot(container).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter} />
    </QueryClientProvider>
  </StrictMode>
);

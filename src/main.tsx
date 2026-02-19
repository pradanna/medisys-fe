import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { appRouter } from '@/presentation/router';
import { RouterProvider } from 'react-router-dom';
import './index.css';

const container = document.getElementById('root')!;
createRoot(container).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);

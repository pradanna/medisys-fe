import type { RouteObject } from 'react-router-dom';
import AppLayout from '@/presentation/layouts/app-layout';
import HospitalInstallationPage from '@/presentation/pages/app/master-data/hospital-installation/HospitalInstallationPage';
import HospitalUnitPage from '@/presentation/pages/app/master-data/hospital-unit/HospitalUnitPage';

export const MasterDataRoutes: RouteObject[] = [
    {
        path: '/hospital-installation',
        Component: AppLayout,
        children: [
            {
                index: true,
                Component: HospitalInstallationPage,
            },
        ],
    },
    {
        path: '/hospital-unit',
        Component: AppLayout,
        children: [
            {
                index: true,
                Component: HospitalUnitPage,
            },
        ],
    },
];

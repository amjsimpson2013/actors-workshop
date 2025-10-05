import { Routes } from '@angular/router';
import { commonRoutes } from './common.routes';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./landing/landing-component'),
        title: 'Landing',
        pathMatch: 'full'
    },
    {
        path: '',
        loadComponent: () => import('./shared/ui/layouts/common-layout-component/common-layout-component'),
        children: commonRoutes
    }
];

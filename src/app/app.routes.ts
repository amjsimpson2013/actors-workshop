import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home'),
        title: 'Home'
    },
    {
        path: 'events',
        loadComponent: () => import('./events/events'),
        title: 'Events'
    },
    {
        path: ' ',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];

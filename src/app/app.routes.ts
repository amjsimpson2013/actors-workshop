import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'landing',
        loadComponent: () => import('./landing/landing-component'),
        title: 'Landing',
        data: { showNav: false, showInToolbar: false, icon: null, description: null }
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home'),
        title: 'Home',
        data: { showNav: true, showInToolbar: true, icon: "home", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." }
    },
    {
        path: 'events',
        loadComponent: () => import('./events/events'),
        title: 'Events',
        data: { showNav: true, showInToolbar: true, icon: "event", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." }
    },
    {
        path: 'about',
        title: 'About Us',
        loadComponent: () => import('./home/home'),
        data: { showNav: true, showInToolbar: true, icon: "diversity_3", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." }
    },
    {
        path: 'contact',
        title: 'Contact Us',
        loadComponent: () => import('./home/home'),
        data: { showNav: true, showInToolbar: true, icon: "rate_review", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/landing'
    }
];

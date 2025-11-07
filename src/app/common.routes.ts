import { ExtendedRoute, ExtendedRoutes } from "./shared/models/ExtendedRoutes";

export const commonRoutes: ExtendedRoutes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home'),
        title: 'Home',
        icon: "home",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." ,
    },
    {
        path: 'events',
        loadComponent: () => import('./events/events'),
        title: 'Events',
        icon: "event", 
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {
        path: 'about',
        title: 'About Us',
        loadComponent: () => import('./about/about'),
        icon: "diversity_3", 
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {
        path: 'contact',
        title: 'Contact Us',
        loadComponent: () => import('./home/home'),
        icon: "rate_review", 
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    }
];
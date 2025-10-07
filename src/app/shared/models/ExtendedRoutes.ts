import { Signal } from "@angular/core";
import { Route } from "@angular/router";

export interface ExtendedRoute extends Route {
    icon?: string;
    description?: string;
}

export declare type ExtendedRoutes = ExtendedRoute[];
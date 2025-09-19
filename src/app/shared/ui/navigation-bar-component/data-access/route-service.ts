import { Injectable } from '@angular/core';
import { ToolbarLink } from './models/toolbar-link.model';
import { routes } from '../../../../app.routes';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  public readonly pageLinksToDisplay: ToolbarLink[] = [];

  constructor() {
    this.pageLinksToDisplay = routes
      .filter((route) => route.data?.['showInToolbar'] ?? false)
      .map((route) => { return {
        title: route.title,
        icon: route.data?.['icon'],
        description: route.data?.['description'],
        path: route.path,
      } as ToolbarLink});
  }
}

import { Component, effect, inject, input, Input, InputSignal, Signal, viewChild } from '@angular/core';
import { PageIconComponent } from "../page-icon/page-icon.component";
import { PageTitleComponent } from '../page-title/page-title.component';
import { PageDescriptionComponent } from "../page-description/page-description.component";
import { ExtendedRoute } from '../../../../models/ExtendedRoutes';
import { IsActiveMatchOptions, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar-item',
  imports: [PageIconComponent, PageTitleComponent, PageDescriptionComponent],
  templateUrl: './navigation-bar-item.component.html',
  styleUrl: './navigation-bar-item.component.scss'
})
export class NavigationBarItemComponent {
  private readonly router: Router = inject(Router);

  @Input() extend: boolean = false;
  @Input() page?: ExtendedRoute = undefined;
  onRouteChange: InputSignal<number> = input(-1);

  private readonly titleComponent: Signal<PageTitleComponent | undefined> = viewChild(PageTitleComponent);
  public pageIsActive: boolean = false;

  constructor() {
    effect(() => {
      if(this.onRouteChange()) {
        this.routeChanged();
      }
    });
  }

  routeChanged() {
    if(this.page && this.page?.path) {
      const matchOptions: IsActiveMatchOptions = {
        paths: 'subset', 
        queryParams: 'subset', 
        fragment: 'ignored', 
        matrixParams: 'ignored'
      };
      this.pageIsActive = this.router.isActive(this.page?.path, matchOptions);
    }
  }
  
  onMouseEnter(): void {
    if(this.titleComponent()) {
      this.titleComponent()!.animateMouseEnter();
    }
  }

  onMouseLeave(): void {
    if(this.titleComponent()) {
      this.titleComponent()!.animateMouseLeave();
    }
  }
}

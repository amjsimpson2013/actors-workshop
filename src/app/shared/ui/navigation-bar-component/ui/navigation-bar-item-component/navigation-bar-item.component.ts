import { Component, effect, inject, input, Input, InputSignal, Signal, viewChild } from '@angular/core';
import { PageIconComponent } from "../page-icon/page-icon.component";
import { PageTitleComponent } from '../page-title/page-title.component';
import { PageDescriptionComponent } from "../page-description/page-description.component";
import { ExtendedRoute } from '../../../../models/ExtendedRoutes';

@Component({
  selector: 'app-navigation-bar-item',
  imports: [PageIconComponent, PageTitleComponent, PageDescriptionComponent],
  templateUrl: './navigation-bar-item.component.html',
  styleUrl: './navigation-bar-item.component.scss'
})
export class NavigationBarItemComponent {
  @Input() extend: boolean = false;
  @Input() page?: ExtendedRoute = undefined;
  activeRoute: InputSignal<string> = input('');

  private readonly titleComponent: Signal<PageTitleComponent | undefined> = viewChild(PageTitleComponent);
  public pageIsActive: boolean = false;

  constructor() {
    effect(() => {
      if(this.activeRoute()) {
        this.routeChanged();
      }
    });
  }

  routeChanged() {
    if(this.page && this.page?.path) {
      const activePath = this.activeRoute().replace('/', '');
      this.pageIsActive = activePath === this.page?.path;
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

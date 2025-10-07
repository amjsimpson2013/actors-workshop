import { Component, DestroyRef, inject, Input, Signal } from '@angular/core';
import { NavigationBarItemComponent } from './ui/navigation-bar-item-component/navigation-bar-item.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { ExtendedRoutes } from '../../models/ExtendedRoutes';
import { commonRoutes } from '../../../common.routes';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  imports: [MatToolbarModule, MatDividerModule, NavigationBarItemComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  private readonly router: Router = inject(Router);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  @Input() extend: boolean = false;

  pageLinks: ExtendedRoutes = commonRoutes;

  onRouteChange$: Observable<string> = this.router.events.pipe(
      takeUntilDestroyed(this.destroyRef),
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged((prev, curr) => prev.url === curr.url),
      map((e) => { return e.url }));

  activeRoute: Signal<string> = toSignal(this.onRouteChange$, {initialValue: ''});
}

import { Component, DestroyRef, inject, Inject, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar-component/navigation-bar.component';
import { ActivatedRoute, Data, NavigationEnd, Router, RouterModule, RouterOutlet } from "@angular/router";
import { filter, Observable, switchMap, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-layout-component',
  imports: [NavigationBarComponent, RouterOutlet, RouterModule],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.scss'
})
export class LayoutComponent implements OnInit{
  public useLayoutWithNavBar: boolean = false;
  private readonly destroyRef = inject(DestroyRef);

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      takeUntilDestroyed(this.destroyRef),
      filter(e => e instanceof NavigationEnd),
      switchMap(() => this.activatedRoute.firstChild ? this.activatedRoute.firstChild.data : this.activatedRoute.data)
    ).subscribe((data: Data) => {
      this.useLayoutWithNavBar = data['showNav'] ?? false
    });
  }
}

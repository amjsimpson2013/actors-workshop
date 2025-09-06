import { Component, inject, Input } from '@angular/core';
import { NavigationBarItemComponent } from './ui/navigation-bar-item-component/navigation-bar-item.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouteService } from './data-access/route-service';
import { ToolbarLink } from './data-access/models/toolbar-link.model';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-navigation-bar',
  imports: [MatToolbarModule, MatDividerModule, NavigationBarItemComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  @Input() extend: boolean = false;

  routeService: RouteService = inject(RouteService);

  pageLinks: ToolbarLink[] = this.routeService.pageLinksToDisplay;
}

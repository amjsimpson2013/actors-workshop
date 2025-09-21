import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageIconComponent } from "../page-icon/page-icon.component";
import { ToolbarLink } from '../../data-access/models/toolbar-link.model';
import { PageTitleComponent } from '../page-title/page-title.component';
import { PageDescriptionComponent } from "../page-description/page-description.component";

@Component({
  selector: 'app-navigation-bar-item',
  imports: [PageIconComponent, PageTitleComponent, PageDescriptionComponent],
  templateUrl: './navigation-bar-item.component.html',
  styleUrl: './navigation-bar-item.component.scss'
})
export class NavigationBarItemComponent {
  @Input() extend: boolean = false;
  @Input() page?: ToolbarLink = undefined;
}

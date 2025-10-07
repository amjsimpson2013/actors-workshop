import { Component, input, Input, InputSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-icon',
  imports: [MatIconModule],
  templateUrl: './page-icon.component.html',
  styleUrl: './page-icon.component.scss'
})
export class PageIconComponent {
  @Input() extend: boolean = false;
  @Input() pageIcon: string = "";
  isActive: InputSignal<boolean> = input(false);
}

import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../navigation-bar-component/navigation-bar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../header-component/header-component";

@Component({
  selector: 'app-common-layout-component',
  imports: [NavigationBarComponent, RouterOutlet, HeaderComponent],
  templateUrl: './common-layout-component.html',
  styleUrl: './common-layout-component.scss'
})
export default class CommonLayoutComponent {}

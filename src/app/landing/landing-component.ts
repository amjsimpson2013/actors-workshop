import { Component } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { WebsiteTitleImageBackgroundComponent } from "./ui/website-title-image-background.component/website-title-image-background.component";
import { TitleComponent } from "./ui/title/title.component";
import { NavigationBarComponent } from "../shared/ui/navigation-bar-component/navigation-bar.component";
import { LogoOverlayComponent } from "./ui/logo-overlay/logo-overlay.component";

@Component({
  selector: 'app-landing-component',
  imports: [MatToolbarModule, MatIconModule, MatDividerModule, WebsiteTitleImageBackgroundComponent, TitleComponent, NavigationBarComponent, LogoOverlayComponent],
  templateUrl: './landing-component.html',
  styleUrl: './landing-component.scss'
})
export default class LandingComponent {
  imagePath: string = "assets/header-image.jpg";
  
  constructor() {
  }

}

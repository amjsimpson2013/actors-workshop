import { Component, effect, inject, Signal } from '@angular/core';
import { ToggleThemeComponent } from "./ui/toggle-theme-component/toggle-theme-component";
import { DocumentService } from '../../data-access/document-service';
import { Theme } from '../../..';

@Component({
  selector: 'app-header-component',
  imports: [ToggleThemeComponent],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent {
  documentService: DocumentService = inject(DocumentService);

  private readonly currentTheme: Signal<Theme> = this.documentService.currentTheme;
  logoUrl: string = 'assets/header-logo-dark.png';

  constructor() {
    effect(() => this.changeLogo());
  }

  changeLogo() {
    switch(this.currentTheme()) {
      case 'dark':
        this.logoUrl = 'assets/header-logo-dark.png';
        break;
      case 'light':
        this.logoUrl = 'assets/header-logo-light.png';
        break;
      default:
        this.logoUrl = 'assets/header-logo-dark.png';
    }
  }
}

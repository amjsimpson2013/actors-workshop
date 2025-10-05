import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Theme } from '../../../../..';
import { DocumentService } from '../../../../data-access/document-service';


@Component({
  selector: 'app-toggle-theme-component',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './toggle-theme-component.html',
  styleUrl: './toggle-theme-component.scss',
  host: {
      'body.color-scheme': 'currentTheme',
  }
})
export class ToggleThemeComponent {
  documentService: DocumentService = inject(DocumentService);

  currentTheme: Theme = 'dark';

  constructor() {}

  setActiveTheme() {
    switch(this.currentTheme) {
      case 'dark':
        this.currentTheme = 'light';
        break;
      case 'light':
        this.currentTheme = 'dark';
        break;
      default: 
        this.currentTheme = 'dark';
        break;
    }
    this.documentService.changeTheme(this.currentTheme);
  }
}

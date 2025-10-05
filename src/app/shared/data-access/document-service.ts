import { DOCUMENT, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Theme } from '../..';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private document: Document = inject(DOCUMENT);

  public currentTheme: WritableSignal<Theme> = signal<Theme>('dark');

  constructor() {
    if (this.document) {
      this.currentTheme.update(() => this.document.body.style.colorScheme as Theme);
    }
  }

  changeTheme(theme: Theme) {
    if(this.document) {
      this.document.body.style.colorScheme = theme;
      this.currentTheme.update(() => theme);
    }
  }
}

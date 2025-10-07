import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header-component';
import { DocumentService } from '../../data-access/document-service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let documentService: DocumentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideZonelessChangeDetection(),
      ]
    })
    .compileComponents();

    documentService = TestBed.inject(DocumentService);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Change Logo', () => {
    it('should return dark mode logo when current theme is dark', () => {
      documentService.changeTheme('dark');
      fixture.detectChanges();
      
      component.changeLogo();
      fixture.detectChanges();

      expect(component.logoUrl).toEqual('assets/header-logo-dark.png');
    });

    it('should return light mode logo when current theme is light', () => {
      documentService.changeTheme('light');
      fixture.detectChanges();
      
      component.changeLogo();
      fixture.detectChanges();

      expect(component.logoUrl).toEqual('assets/header-logo-light.png');
    });
  })
});

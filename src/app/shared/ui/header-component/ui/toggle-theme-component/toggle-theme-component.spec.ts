import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleThemeComponent } from './toggle-theme-component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ToggleThemeComponent', () => {
  let component: ToggleThemeComponent;
  let fixture: ComponentFixture<ToggleThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleThemeComponent],
      providers: [
        provideZonelessChangeDetection(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('set active theme', () => {
    it('should set theme to light if current theme is dark', () => {
      component.currentTheme = 'dark';
      
      component.setActiveTheme();

      expect(component.currentTheme).toEqual('light');
    });

    it('should set theme to dark if current theme is light', () => {
      component.currentTheme = 'light';
      
      component.setActiveTheme();

      expect(component.currentTheme).toEqual('dark');
    });
  })
});

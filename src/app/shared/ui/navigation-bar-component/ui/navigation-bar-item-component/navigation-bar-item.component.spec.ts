import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarItemComponent } from './navigation-bar-item.component';
import { input, provideZonelessChangeDetection, signal } from '@angular/core';
import { ExtendedRoute } from '../../../../models/ExtendedRoutes';

describe('NavigationBarItemComponent', () => {
  let component: NavigationBarItemComponent;
  let fixture: ComponentFixture<NavigationBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationBarItemComponent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('route changed', () => {
    it('should set page is active to true when route matches path',() => {
      const testActiveRoute = '/home';
      const testPage: ExtendedRoute = {
        path: 'home'
      }
      fixture.componentRef.setInput('activeRoute', testActiveRoute);
      fixture.componentRef.setInput('page', testPage);

      fixture.detectChanges();

      expect(component.pageIsActive).toBeTrue();
    });

    it('should set page is active to false when route does not match path',() => {
      const testActiveRoute = '/home';
      const testPage: ExtendedRoute = {
        path: 'contact'
      }
      fixture.componentRef.setInput('activeRoute', testActiveRoute);
      fixture.componentRef.setInput('page', testPage);

      fixture.detectChanges();

      expect(component.pageIsActive).toBeFalse();
    });
  })
});

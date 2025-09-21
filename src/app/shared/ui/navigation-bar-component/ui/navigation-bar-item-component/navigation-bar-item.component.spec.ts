import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarItemComponent } from './navigation-bar-item.component';
import { provideZonelessChangeDetection } from '@angular/core';

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
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoOverlayComponent } from './logo-overlay.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('LogoOverlayComponent', () => {
  let component: LogoOverlayComponent;
  let fixture: ComponentFixture<LogoOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoOverlayComponent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

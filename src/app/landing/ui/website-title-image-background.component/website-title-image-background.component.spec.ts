import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteTitleImageBackgroundComponent } from './website-title-image-background.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('WebsiteTitleImageBackgroundComponent', () => {
  let component: WebsiteTitleImageBackgroundComponent;
  let fixture: ComponentFixture<WebsiteTitleImageBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteTitleImageBackgroundComponent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteTitleImageBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDescriptionComponent } from './page-description.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('PageDescriptionComponent', () => {
  let component: PageDescriptionComponent;
  let fixture: ComponentFixture<PageDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDescriptionComponent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

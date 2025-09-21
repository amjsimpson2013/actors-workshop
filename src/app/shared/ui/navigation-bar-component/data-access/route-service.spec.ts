import { TestBed } from '@angular/core/testing';

import { RouteService } from './route-service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('RouteService', () => {
  let service: RouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]});
    service = TestBed.inject(RouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

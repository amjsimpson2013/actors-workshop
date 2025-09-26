import { TestBed } from '@angular/core/testing';

import { RouteService } from './route-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { routes } from '../../../../app.routes';

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

  describe('constructor', () => {
    it('filters routes with the show in toolbar flag set to true and assigns to page links to display', () => {
      const numberOfNonDisplayRoutes = routes.filter((route) => !route.data?.['showInToolbar']).length;
      const numberOfRoutes = routes.length;
      const expectedNumberOfPageLinksToDisplay = numberOfRoutes - numberOfNonDisplayRoutes;

      expect(service.pageLinksToDisplay.length).toEqual(expectedNumberOfPageLinksToDisplay);
    });
  })
});

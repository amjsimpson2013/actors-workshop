import { TestBed } from '@angular/core/testing';
import { EventsService } from './events-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { HttpTestingController, provideHttpClientTesting, TestRequest } from '@angular/common/http/testing';
import { firstValueFrom, Observable, throwError } from 'rxjs';
import { CalendarEvent } from './events-model';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';

describe('Events Service', () => {
  let service: EventsService;
  let fixture: TestBed;
  let httpClient: HttpTestingController;
  let request: TestRequest;

  beforeEach( async() => {
    fixture = TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ]});
    httpClient = TestBed.inject(HttpTestingController);
    service = TestBed.inject(EventsService);
  });

  afterEach(() => {
  // Verify that none of the tests make any extra HTTP requests.
  httpClient.verify();
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetch event list', () => {
    it('returns undefined when api returns null response', async() => {
      let events$ = service.fetchEventList();
      let eventCall = firstValueFrom(events$, { defaultValue: undefined });
      request = httpClient.expectOne({method: 'GET', url: 'api/events'});

      request.flush(null);
      expect(await eventCall).toBeUndefined();
      httpClient.verify();
    });

    it('returns calendar event when api returns json response', async() => {
      let events$ = service.fetchEventList();
      let eventCall = firstValueFrom(events$, { defaultValue: undefined });
      request = httpClient.expectOne({method: 'GET', url: 'api/events'});

      let response: Object = [{"id": 'test-id'}]
      let expectation = JSON.parse(JSON.stringify(response)) as CalendarEvent[];
      request.flush(response);
      expect(await eventCall).toEqual(expectation);
      httpClient.verify();
    });

    it('returns empty array when api returns empty json', async() => {
      let events$ = service.fetchEventList();
      let eventCall = firstValueFrom(events$, { defaultValue: undefined });
      request = httpClient.expectOne({method: 'GET', url: 'api/events'});

      let response: Object = []
      let expectation = JSON.parse(JSON.stringify(response)) as CalendarEvent[];
      request.flush(response);
      expect(await eventCall).toEqual(expectation);
      httpClient.verify();
    });

    it('returns empty object when error is thrown', async() => {
      let events$ = service.fetchEventList();
      let eventCall = firstValueFrom(events$, { defaultValue: undefined });
      request = httpClient.expectOne({method: 'GET', url: 'api/events'});

      const errorResponse = new HttpErrorResponse({
        error: { code: 'test', message: 'test'},
        status: 400,
        statusText: 'Bad Request',
      });
      request.flush(throwError(() => errorResponse));
      expect(await eventCall).toEqual({} as CalendarEvent[]);
      httpClient.verify();
    });
  })
});

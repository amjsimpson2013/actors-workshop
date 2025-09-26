import { DestroyRef, inject, Injectable, linkedSignal } from '@angular/core';
import { CalendarEvent } from './events-model';
import { HttpClient } from '@angular/common/http';
import { rxResource, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventsUrl = 'api/events';

  httpClient: HttpClient = inject(HttpClient);
  destroyRef: DestroyRef = inject(DestroyRef);

  loadedEvents = rxResource({stream: () => this.fetchEventList()});

  events = linkedSignal({
    source: this.loadedEvents.value,
    computation: (events) => events ?? []
  });

  error = linkedSignal({
    source: this.loadedEvents.error,
    computation: (err) => err ?? undefined
  })

  constructor() {}

  fetchEventList(): Observable<CalendarEvent[] | undefined > {
    return this.httpClient.get(this.eventsUrl)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map((response) => response ? (JSON.parse(JSON.stringify(response))) as CalendarEvent[] : undefined),
        map((response) => { return response ? response : undefined }),
        catchError(() => EMPTY)
      );  
  }
}

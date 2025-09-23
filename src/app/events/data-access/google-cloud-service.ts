import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { CalendarEvent } from './events-model';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class GoogleCloudService {
  private eventsUrl = 'api/events';

  httpClient: HttpClient = inject(HttpClient);

  eventsLoaded = rxResource({stream: () => this.fetchEventList()});

  fetchEventList(): Observable<CalendarEvent[]> {
    return this.httpClient.get(this.eventsUrl)
      .pipe(
        map((response) => response ? (JSON.parse(JSON.stringify(response)) as CalendarEvent[]) : {} as CalendarEvent[]),
        map((response) => { return response ? response : [] })
      );
  }
}
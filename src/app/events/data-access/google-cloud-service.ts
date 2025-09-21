import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { CalendarEvent, GCalResponse } from './events-model';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class GoogleCloudService {
  private baseApiUrl = environment.baseApiUrl;
  private eventsUrl = environment.eventsUrl;

  httpClient: HttpClient = inject(HttpClient);

  eventsLoaded = rxResource({stream: () => this.fetchEventList()})

  fetchEventList(): Observable<CalendarEvent[]> {
    const startDate = new Date();
    const endDate = new Date(new Date().setMonth(startDate.getMonth() + 1));

    let params = new HttpParams()
      .set('timeMin', startDate.toISOString())
      .set('timeMax', endDate.toISOString())
      .set('singleEvents', true)
      .set('orderBy', "startTime");

    const url = new URL(this.baseApiUrl + this.eventsUrl);

    return this.httpClient.get<Object>(url.toString())
      .pipe(
        map((response) => response ? (JSON.parse(JSON.stringify(response)) as CalendarEvent[]) : {} as CalendarEvent[]),
        map((response) => { return response ? response : [] })
      );
  }
}
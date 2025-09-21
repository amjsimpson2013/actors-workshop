import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { CalendarEvent, GCalResponse } from './events-model';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class GoogleCloudService {
  eventsLoaded = rxResource({stream: () => this.fetchEventList()})

  fetchEventList(): Observable<CalendarEvent[]> {
    return of([]);
  }
}
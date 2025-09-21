import { inject, Injectable, linkedSignal } from '@angular/core';
import { CalendarEvent } from './events-model';
import { GoogleCloudService } from './google-cloud-service';

export interface EventsState {
  eventItems: CalendarEvent[];
  loaded: boolean;
  error: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private googleCloudService = inject(GoogleCloudService);

  loadedEvents = this.googleCloudService.eventsLoaded;

  events = linkedSignal({
    source: this.loadedEvents.value,
    computation: (events) => events ?? []
  });

  constructor() {console.log(this.events());}
}

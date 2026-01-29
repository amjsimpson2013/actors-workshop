import { Component, computed, effect, inject, Signal, viewChild, ViewChild } from '@angular/core';
import { EventsService } from './data-access/events-service';
import { MatIconModule } from '@angular/material/icon';
import { EventDetail, EventsByTypes, EventSummary, EventTypes, KeyValueItem } from './data-access/events-model';
import { MatTabsModule } from "@angular/material/tabs";
import { DatePipe, formatDate } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from "@angular/material/card";
import { EMPTY } from 'rxjs';
import { MatDrawer, MatSidenav, MatSidenavContent, MatSidenavModule } from "@angular/material/sidenav";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-events',
  imports: [MatTabsModule, MatIconModule, MatDividerModule, MatCardModule, MatSidenavModule, MatProgressSpinnerModule],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export default class Events {
[x: string]: any;
  eventsService: EventsService = inject(EventsService);
  currentEvents: Signal<EventSummary[]> = this.eventsService.currentEvents;
  currentEventErrors: Signal<string | null> = this.eventsService.currentEventsError;
  eventTypes: Signal<EventTypes> = this.eventsService.eventTypes;
  eventsByTypes: Signal<EventsByTypes[]> = this.eventsService.eventsByTypes;
  eventsByTypeError: Signal<string | null> = this.eventsService.eventsByTypesError;
  eventDetails: Signal<EventDetail | null> = this.eventsService.eventDetails;
  eventDetailError: Signal<string | null> = this.eventsService.eventDetailError;
  drawer = viewChild(MatDrawer);

  getImageThumbnailUri(event: EventSummary): string {
    return `/assets/${event.thumbnailName}.${event.thumbnailType}`;
  }

  getImageUri(event: EventDetail | null): string {
    if(!event) return '';
    return `/assets/${event.thumbnailName}.${event.thumbnailType}`;
  }

  getEventsFromType(type: KeyValueItem): EventSummary[] {
    let eventsByType = this.eventsByTypes().find(eventsByType => eventsByType.type.name === type.name);
    if (eventsByType && eventsByType.events.length > 0) {
      return eventsByType.events;
    }
    return [];
  }

  formatDate(date: Date | undefined): string {
    if (!date) return '';
    return formatDate(date, 'mm/dd/yyyy', 'en-us');
  }

  formatTime(date: Date | undefined): string {
    if (!date) return '';
    return formatDate(date, 'hh:mm', 'en-us');
  }

  formatDateTime(date: Date | undefined): string {
    if (!date) return '';
    return formatDate(date, 'mm/dd/yyyy hh:mm', 'en-us');
  }

  getEventDetails(event: EventSummary) {
    this.eventsService.getEventDetail$.next(event.id);
    this.drawer()?.toggle();
  }
}

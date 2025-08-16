import { Component, inject } from '@angular/core';
import { EventsService } from './data-access/events-service';
import { CalendarEvent } from './data-access/events-model';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-events',
  imports: [ MatExpansionModule, MatIconModule ],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export default class Events {
  eventsService: EventsService = inject(EventsService);
  data: CalendarEvent[] = [];

  constructor() {
    this.data = this.eventsService.getEventList();
  }
}

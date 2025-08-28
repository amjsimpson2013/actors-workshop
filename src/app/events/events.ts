import { Component, computed, DestroyRef, effect, inject, Signal } from '@angular/core';
import { EventsService } from './data-access/events-service';
import { CalendarEvent, GCalResponse } from './data-access/events-model';
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
  destroyRef: DestroyRef = inject(DestroyRef);

  eventsList = computed(() =>
    this.eventsService
      .events()
  );

  constructor() {}
}

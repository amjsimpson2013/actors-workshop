import { Component, computed, DestroyRef, inject } from '@angular/core';
import { EventsService } from './data-access/events-service';
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
    this.error() ? [] : this.eventsService.events()
  );

  error = computed(() => 
    this.eventsService.error() ?? undefined
  )

  constructor() {}
}

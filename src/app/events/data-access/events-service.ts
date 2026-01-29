import { Injectable, computed, inject, signal } from "@angular/core";
import { EventDetail, EventsByTypes, EventSummary, EventTypes } from "./events-model";
import { HttpClient } from "@angular/common/http";
import { map, catchError, Subject, combineLatestWith, mergeMap, expand, mergeScan, connect, Observable, merge, from, switchMap, exhaustMap, EMPTY } from "rxjs";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";

interface EventState {
  currentEvents: EventSummary[];
  currentEventsError: string | null;
  eventTypes: EventTypes;
  eventsByTypes: EventsByTypes[];
  eventsByTypesError: string | null;
  eventDetails: EventDetail | null;
  eventDetailError: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private httpClient = inject(HttpClient);

  private eventsUrl = 'api/events';
  private eventsState = signal<EventState>({
    currentEvents: [],
    currentEventsError: null,
    eventTypes: [],
    eventsByTypes: [],
    eventsByTypesError: null,
    eventDetails: null,
    eventDetailError: null,
  });

  private currentEvents$ = this.fetchCurrentEvents()
    .pipe(
      catchError((err) => {
        this.eventsState.update((state) => ({
          ...state,
          currentEventsError: err.message
        }));
        return EMPTY;
      })
    );

  private eventTypes$ = this.fetchEventTypes()
    .pipe(
      catchError((err) => {
        this.eventsState.update((state) => ({
          ...state,
          eventsByTypesError: err.message
        }));
        return EMPTY;
      })
    );

  private eventsByTypes$ = this.fetchEventsByType()
    .pipe(
      catchError((err) => {
        this.eventsState.update((state) => ({
          ...state,
          eventsByTypesError: err.message
        }));
        return EMPTY;
      })
    );

  getEventDetail$ = new Subject<number>();

  public currentEvents = computed(() => this.eventsState().currentEvents);
  public currentEventsError = computed(() => this.eventsState().currentEventsError);
  public eventTypes = computed(() => this.eventsState().eventTypes);
  public eventsByTypes = computed(() => this.eventsState().eventsByTypes);
  public eventsByTypesError = computed(() => this.eventsState().eventsByTypesError);
  public eventDetails = computed(() => this.eventsState().eventDetails);
  public eventDetailError = computed(() => this.eventsState().eventDetailError);

  constructor() {
    this.currentEvents$.pipe(takeUntilDestroyed()).subscribe((currentEvent: EventSummary[]) => 
      this.eventsState.update((state) => ({
        ...state,
        currentEvents: currentEvent
    })));

    this.eventTypes$.pipe(takeUntilDestroyed()).subscribe((eventTypes: EventTypes) => 
      this.eventsState.update((state) => ({
        ...state,
        eventTypes: eventTypes
      }))
    );
    
    this.eventsByTypes$.pipe(takeUntilDestroyed()).subscribe((eventsByTypes: EventsByTypes[]) =>
      this.eventsState.update((state) => ({
        ...state,
        eventsByTypes: eventsByTypes
      }))
    );
    
    this.getEventDetail$.pipe(
      takeUntilDestroyed(),
      switchMap((eventId) => this.fetchEventDetails(eventId))
    ).subscribe({
      next: (event) => {
        this.eventsState.update((state) => ({
          ...state,
          eventDetails: event
        }))
      },
      error: (err) => {
        console.log(err);
        this.eventsState.update((state) => ({
          ...state,
          eventDetailError: err.message
        }))
      }
    });
  }

  private fetchCurrentEvents() {
    return this.httpClient.get<EventSummary[]>(this.eventsUrl + '/current');
  }

  private fetchEventsByType() {
    return this.httpClient.get<EventsByTypes[]>(this.eventsUrl + '/getByType');
  }

  private fetchEventTypes() {
    return this.httpClient.get<EventTypes>(this.eventsUrl + '/types').pipe(catchError(err => { console.log(err); return [];}))
  }

  private fetchEventDetails(id: number) {
    const fetchEventUrl = this.eventsUrl + '/' + id;
    return this.httpClient.get<EventDetail>(fetchEventUrl).pipe();
  }

  public clearDetails() {
    this.eventsState.update((state) => ({
      ...state,
      eventDetails: null,
      eventDetailError: null
    }));
  }
}

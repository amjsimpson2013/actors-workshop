import { Injectable } from '@angular/core';
import { CalendarEvent } from './events-model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private testEventsList: CalendarEvent[] = [
    {
      id: 'test1',
      status: 'open',
      summary: 'Test Event',
      description: 'This is a test event, test event, test event. This is a test event, test event, test event.',
      location: '123 main st, Grand Rapids, MI, 12345',
      start: new Date(2025, 8, 14, 2, 0, 0, 0),
      end: new Date(2025, 8, 14, 9, 0, 0, 0),
    },
    {
      id: 'test2',
      status: 'open',
      summary: 'Test Event',
      description: 'This is a test event, test event, test event. This is a test event, test event, test event.',
      location: '123 main st, Grand Rapids, MI, 12345',
      start: new Date(2025, 8, 18, 2, 0, 0, 0),
      end: new Date(2025, 8, 18, 9, 0, 0, 0),
    },
    {
      id: 'test3',
      status: 'cancelled',
      summary: 'Cancelled Test Event',
      description: 'This is a test event, test event, test event. This is a test event, test event, test event.',
      location: '123 main st, Grand Rapids, MI, 12345',
      start: new Date(2025, 8, 20, 2, 0, 0, 0),
      end: new Date(2025, 8, 20, 9, 0, 0, 0),
    },
    {
      id: 'test4',
      status: 'open',
      summary: 'Test Event',
      description: 'This is a test event, test event, test event. This is a test event, test event, test event.',
      location: '123 main st, Grand Rapids, MI, 12345',
      start: new Date(2025, 8, 22, 2, 0, 0, 0),
      end: new Date(2025, 8, 22, 9, 0, 0, 0),
    },
  ];

  getEventList() {
    return this.testEventsList;
  }
}

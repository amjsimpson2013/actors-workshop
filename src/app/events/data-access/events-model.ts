export interface CalendarEvent {
    kind: string;
    etag: string;
    id: string;
    status: string;
    htmlLink: string;
    created: string;
    updated: string;
    summary: string;
    description: string;
    creator: any;
    organizer: any;
    start: any;
    end: any;
    recurringEventId: string;
    originalStartTime: any;
    iCalUID: string;
    sequence: number;
    eventType: string;
}

export interface GCalResponse {
    kind: string;
    etag: string;
    summary: string;
    description: string;
    updated: string;
    timeZone: string;
    accessRole: string;
    defaultReminders: string[];
    nextSyncToken: string;
    items: CalendarEvent[];
}
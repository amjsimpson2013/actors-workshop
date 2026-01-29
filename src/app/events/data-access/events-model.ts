export interface EventSummary {
    id: number;
    name: string | null;
    startDate: Date | undefined;
    endDate: Date | undefined;
    thumbnailName: string | null;
    thumbnailType: string | null;
}

export interface EventDetail {
    id: number;
    name: string | null;
    description: string | null;
    startDate: Date | undefined;
    endDate: Date | undefined;
    imageName: string | null;
    imageType: string | null;
    eventTypeId: number;
    statusTypeId: number | undefined;
    reoccurenceTypeId: number | null;
    thumbnailName: string | null;
    thumbnailType: string | null;
}

export interface KeyValueItem {
    id: number;
    name: string;
}

export type EventTypes = KeyValueItem[];

export type EventsByTypes = {
    type: KeyValueItem,
    events: EventSummary[]
};
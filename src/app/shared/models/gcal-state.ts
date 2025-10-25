export interface GCalState {
    ads: GCalAdvert[];
    loading: boolean;
    error: string | undefined;
}

export interface GCalAdvert {
    title: string;
    description: string;
    fileId: string;
    fileUrl: string;
}
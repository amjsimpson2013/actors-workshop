export interface Advertisement {
    id: number;
    name: string;
    summary: string | null;
    imageName: string;
    imageType: 'png' | 'jpg';
}
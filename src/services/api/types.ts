export interface IArtist {
    id: number;
    name: string;
    url: string;
    image_url: string;
    thumb_url: string;
    facebook_page_ul: string;
    mbid: string;
    tracker_count: string;
    upcoming_event_count: number;
    events?: IEvent[];
}

export interface IEvent {
    id: string;
    artist_id: string;
    url: string;
    on_sale_datetime: string;
    datetime: string;
    description: string;
    venue: IVenue;
    offers: IOffer[];
    lineup: string[];
}

export interface IVenue {
    name: string;
    latitude: string;
    longtitude: string;
    city: string;
    region: string;
    country: string;
}
export interface IOffer {
    type: string;
    url: string;
    status: string;
}
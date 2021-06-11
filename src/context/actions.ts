import { IArtist, IEvent } from "services/api/types";

export enum ActionTypes {
    SET_ARTIST = 'SET_ARTIST',
    SET_EVENTS = 'SET_EVENTS',
    SELECT_EVENT = 'SELECT_EVENT',
    UPDATE_FAVOURITE = 'UPDATE_FAVOURITE',
    SET_FAVOURITES = 'SET_FAVOURITES',
}

export type Action = {
    type: ActionTypes,
    payload: any
};

export const setArtist = (artist: IArtist): Action => ({
    type: ActionTypes.SET_ARTIST,
    payload: artist
});

export const setEvents = (events: IEvent[]): Action => ({
    type: ActionTypes.SET_EVENTS,
    payload: events
})

export const selectEvent = (eventId: string): Action => ({
    type: ActionTypes.SELECT_EVENT,
    payload: eventId
})

export const updateFavourite = (event: Partial<IEvent>): Action => ({
    type: ActionTypes.UPDATE_FAVOURITE,
    payload: event
})

export const setFavourites = (events: Partial<IEvent>[]): Action => ({
    type: ActionTypes.SET_FAVOURITES,
    payload: events
})

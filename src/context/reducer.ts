import { IArtist, IEvent } from "services/api/types"
import { Action, ActionTypes } from "./actions";

export interface IState {
    artist?: IArtist;
    selectedEvent?: IEvent;
    favouriteEvents?: IEvent[];
}

const reducer = (state: IState, action: Action) => {
    switch (action.type) {
        case ActionTypes.SET_ARTIST: {
            return {
                ...state,
                artist: action.payload,
                selectedEvent: undefined
            }
        }
        case ActionTypes.SET_EVENTS: {
            return {
                ...state,
                artist: {
                    ...state.artist,
                    events: action.payload
                }
            }
        }
        case ActionTypes.SELECT_EVENT: {
            const getEvent = (eventId: string) => state.artist?.events?.find(e => e.id === eventId);
            return {
                ...state,
                selectedEvent: getEvent(action.payload)
            }
        }
        case ActionTypes.UPDATE_FAVOURITE: {

            let newFavourites;
            if(state.favouriteEvents && state.favouriteEvents.find(e => e.id === action.payload.id)) {
                newFavourites = state.favouriteEvents.filter(e => e.id !== action.payload.id);
            } else {
                newFavourites = [...state.favouriteEvents || [], action.payload];
            }
            return {
                ...state,
                favouriteEvents: newFavourites
            };
        }
        case ActionTypes.SET_FAVOURITES: {
            return {
                ...state,
                favouriteEvents: action.payload
            };
        }
        default:
            return state;
    }
}

export default reducer;
import { BaseSyntheticEvent, useCallback, useContext, useState } from "react";

import { AppContext } from "context/AppContext";
import { setArtist, setEvents } from "context/actions";
import api from 'services/api';

const useSearch = () => {
    const [ searchVal, setSearchVal ] = useState<string>('');
    const { dispatch } = useContext(AppContext);
    const onSearchChange = useCallback((e: BaseSyntheticEvent) => {
        setSearchVal(e.target.value);
    }, []);
    const applySearch = useCallback(async(e) => {
        e.preventDefault();
        try {
            const [artist, events] = await Promise.all([api.getArtist(searchVal), api.getArtistEvents(searchVal)]);
            dispatch(setArtist(artist.data));
            dispatch(setEvents(events.data));
        } catch(error) {
            console.error(error);
        }
    }, [searchVal, dispatch]);
    return {
        searchVal,
        onSearchChange,
        applySearch
    }
}

export default useSearch;
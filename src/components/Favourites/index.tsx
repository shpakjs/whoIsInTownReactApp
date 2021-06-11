import { FC, useContext } from 'react';

import { Event } from 'components';
import { AppContext } from 'context/AppContext';
import { updateFavourite } from 'context/actions';

const Favourites: FC = () => {
    const { dispatch, state: {favouriteEvents: events}} = useContext(AppContext);
    const handleStarClick = (event) => {
        dispatch(updateFavourite(event));
    }
    return <div>
        <header>Favourite events</header>
        { events.map(e => (
            <Event 
                key={e.id}
                data={e}  
                favourite 
                onStarClick={handleStarClick}
            />)) 
        }
    </div>;
}

export default Favourites;

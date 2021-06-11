import { FC } from 'react';

import { BandCard, Favourites, EventDetails } from 'components';
import styles from './styles.module.css';
import { useContext } from 'react';
import { AppContext } from 'context/AppContext';

const PageLayout: FC = () => {
    const {state} = useContext(AppContext);
    return <div className={styles.content}>
        <div className={styles.band}>{state.artist && <BandCard artist={state.artist}/>}</div>
        <div className={styles.event}>{state.selectedEvent && <EventDetails />}</div>
        <div className={styles.favourites}>{
            state.favouriteEvents && state.favouriteEvents.length > 0  && <Favourites />
        }</div>
    </div>;
}

export default PageLayout;
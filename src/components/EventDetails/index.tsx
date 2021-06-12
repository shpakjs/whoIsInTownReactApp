import { FC, useContext } from 'react';

import Star from 'components/Icons/Star';
import { updateFavourite } from 'context/actions';
import { AppContext } from 'context/AppContext';
import { formatDate } from 'utils';
import styles from './styles.module.css';

const EventDetails: FC = () => {
    const { dispatch, state: { favouriteEvents, selectedEvent } } = useContext(AppContext);
    const {
        id, datetime, description, 
        venue, offers, lineup, url
    } = selectedEvent;
    const handleStarClick = () => {
        dispatch(updateFavourite({ id, datetime, lineup, venue}))
    }
    const isFavourite = favouriteEvents?.some(e => e.id === id);

    return <div className={styles.card}>
    {
        selectedEvent && (
        <>
            <div className={styles.infoBlock}>
                <div onClick={handleStarClick} className={styles.header}>
                <div className={styles.date}>{formatDate(datetime)}</div>
                    <Star filled={isFavourite} width="30px" height="30px" />
                </div>
                <div>{venue.name}</div>
                <div>{`${venue.city}, ${venue.country}`}</div>
            </div>
            <div className={styles.infoBlock}>
                <p className={styles.text}>{description}</p>
            </div>
            <div className={styles.infoBlock}>
                {offers.map(offer => <a href={offer.url}>{offer.type}</a>)}
            </div>
            <p>See more details <a href={url}>here</a></p>
        </>)
    }
    </div>;
}

export default EventDetails;
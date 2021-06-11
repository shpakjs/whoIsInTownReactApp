import { FC } from 'react';

import Star from 'components/Icons/Star';
import { IEvent } from 'services/api/types';
import { formatDate } from 'utils';
import styles from './styles.module.css';

interface IProps {
    data: Partial<IEvent>;
    favourite?: boolean;
    onEventClick?: (eventId: string) => void;
    onStarClick?: (eventId: Partial<IEvent>) => void;
}

const Event: FC<IProps> = ({data, favourite, onEventClick, onStarClick}) => {
    const handleClick = () => {
        if(onEventClick) onEventClick(data.id);
    }
    const handleStarClick = () => {
        if(onStarClick) onStarClick({id: data.id});
    }
    return <div onClick={handleClick} className={styles.event}>
        {favourite && <div className={styles.header}>
            <div className={styles.artist}>{data.lineup}</div>
                <div onClick={handleStarClick}><Star filled /></div>
            </div>
        }
        <div>
            <div>{data.venue.name}</div>
            <div className={styles.location}>{`${data.venue.city}, ${data.venue.country}`}</div>
        </div>
        <div className={styles.date}>{formatDate(data.datetime)}</div>
    </div>;
}

export default Event;
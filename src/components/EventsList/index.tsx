import { FC, useContext, useState } from 'react';

import { Event } from 'components';
import { IEvent } from 'services/api/types';
import { AppContext } from 'context/AppContext';
import { selectEvent } from 'context/actions';
import styles from './styles.module.css';

interface IProps { 
    events: IEvent[];
};

const EventList: FC<IProps> = ({ events }) => {
    const [shownCount, setShownCount] = useState<number>(6);
    const {dispatch} = useContext(AppContext);
    const handleEventClick = (eventId: string) => {
        dispatch(selectEvent(eventId));
    }
    const showMore = () => setShownCount(prevState => prevState + 6);
    const displayShowMore = events.length - shownCount > 0
    return <div>
        Events
        {events.slice(0,shownCount)
            .map( e => <Event key={e.id} data={e} onEventClick={handleEventClick}/>)
        }
        {displayShowMore && 
            <button className={styles.showMore} onClick={showMore}>
                Show more
            </button>
        }
    </div>;
}

export default EventList;
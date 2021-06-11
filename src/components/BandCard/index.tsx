import { FC } from 'react';

import { BandInfo, EventsList } from 'components';
import { IArtist } from 'services/api/types';
import styles from './styles.module.css';

interface IProps {
    artist: IArtist;
}
const BandCard: FC<IProps> = ({ artist }) => {
    return <div>
        <BandInfo {...artist} />
        { artist.events?.length > 0 
            ? <EventsList events={artist.events} /> 
            : <span className={styles.emptyList}> No events found :( </span>
        }
    </div>;
}

export default BandCard;
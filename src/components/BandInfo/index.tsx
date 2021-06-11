import { FC } from 'react';
import { IArtist } from 'services/api/types';

import styles from './styles.module.css';

const BandInfo: FC<IArtist> = ({image_url, name}) => {
    return <div>
        <img src={image_url} alt="artist" className={styles.image} />
        <p className={styles.name}>{name}</p>
    </div>;
}

export default BandInfo;
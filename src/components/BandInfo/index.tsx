import { FC } from 'react';
import { IArtist } from 'services/api/types';

import styles from './styles.module.css';

const BandInfo: FC<IArtist> = ({thumb_url, name}) => (
    <div>
        <img src={thumb_url} alt="artist" className={styles.image} />
        <p className={styles.name}>{name}</p>
    </div>
)

export default BandInfo;
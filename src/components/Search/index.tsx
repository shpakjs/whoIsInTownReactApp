import { FC } from 'react';

import useSearch from './useSearch';
import styles from './styles.module.css';

const Search: FC = () => {
    const {
        searchVal,
        onSearchChange,
        applySearch
    } = useSearch();
    return <form className={styles.form} onSubmit={applySearch}>
       <input 
            className={styles.search}
            placeholder="Enter artist name" 
            value={searchVal} 
            onChange={onSearchChange}
        />
        <button 
            type="submit" 
            disabled={!searchVal}
            className={styles.button}
        >
            SEARCH
        </button>
    </form>;
}

export default Search;
;
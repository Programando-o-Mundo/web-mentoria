'use client'

import styles from './searchBar.module.css'
import { BiSearchAlt2 } from 'react-icons/bi'

import { searchs } from './searchs'

const functionCall = (search: string) => {
    if(search === 'division')
        return searchs.searchDivision;
    else if(search === 'group')
        return searchs.searchGroup;
    else
        return searchs.default;
}

export default function SearchBar(props: { search: string }) {
    return (
        <section className={styles.sectionSearchBar}>
            <form className={styles.searchBarContainer} onSubmit={functionCall(props.search)}>
                <button id="buttonSearchMovies" className={styles.searchButton} type="submit" title="search">
                    <BiSearchAlt2 className={styles.icon}/>
                </button>
                <input id="inputSearchContent" className={styles.searchInput} type="search" placeholder="Search for..." />
            </form>
        </section>
    )
}

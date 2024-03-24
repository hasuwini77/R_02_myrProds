import styles from './CategoryFilters.module.css';
import Container from 'react-bootstrap/Container';
import BorderButton from '../BorderButtons';
import CategoryTracks from '../CategoryTracks';
import { useState } from 'react';
import { DISPLAYED_TRACKS, JAZZY_TRACKS, PUNCHY_TRACKS, CHILL_TRACKS } from '../../data/data';

const CategoryFilters = () => {

    const [tracks, setTracks] = useState(DISPLAYED_TRACKS);
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilter = (category) => {
        switch (category) {
            case 'jazzy':
                setTracks(JAZZY_TRACKS)
                setActiveFilter('jazzy')
                break;
            case 'punchy':
                setTracks(PUNCHY_TRACKS)
                setActiveFilter('punchy')
                break;
            case 'chill':
                setTracks(CHILL_TRACKS)
                setActiveFilter('chill')
                break;
            default:
                setTracks(DISPLAYED_TRACKS)
                setActiveFilter('all')
                break;
        }
    }

    return (
        < Container className={styles.mainCategory}>
            <div className={styles.category}>
                <h2>Music Categories</h2>
                <Container>
                    <BorderButton onClick={() => handleFilter('all')} active={activeFilter === 'all'}>
                        all
                    </BorderButton>
                    <BorderButton onClick={() => handleFilter('jazzy')} active={activeFilter === 'jazzy'}>
                        jazzy
                    </BorderButton>
                    <BorderButton onClick={() => handleFilter('punchy')} active={activeFilter === 'punchy'} >
                        punchy
                    </BorderButton>
                    <BorderButton onClick={() => handleFilter('chill')} active={activeFilter === 'chill'}>
                        chill
                    </BorderButton>
                </Container>
            </div>
            < CategoryTracks tracks={tracks} />
        </Container>

    )
}

export default CategoryFilters;
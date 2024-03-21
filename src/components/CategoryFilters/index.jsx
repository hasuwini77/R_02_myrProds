import styles from './CategoryFilters.module.css';
import Container from 'react-bootstrap/Container';
import BorderButton from '../BorderButtons';
import CategoryTracks from '../CategoryTracks';

const CategoryFilters = () => {
    return (
        < Container className={styles.mainCategory}>
            <div className={styles.category}>
                <h2>Music Categories</h2>
                <Container>
                    <BorderButton name="jazzy" />
                    <BorderButton name="punchy" />
                    <BorderButton name="chill" />
                </Container>
            </div>
            < CategoryTracks />
        </Container>

    )
}

export default CategoryFilters;
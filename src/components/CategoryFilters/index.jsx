import styles from './CategoryFilters.module.css';
import Container from 'react-bootstrap/Container';
import BorderButton from '../BorderButtons';

const CategoryFilters = ({ category }) => {
    return (
        < Container>
            <div className={styles.category}>
                <h2>Music Categories</h2>
                <Container>
                    <BorderButton name="jazzy" />
                    <BorderButton name="punchy" />
                    <BorderButton name="chill" />
                </Container>
            </div>
        </Container>

    )
}

export default CategoryFilters;
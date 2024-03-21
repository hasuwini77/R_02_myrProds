import styles from './CategoryTrack.module.css'
import { getAudioURL, getImageURL } from '../../utils/function';
import Container from 'react-bootstrap/Container';

const CategoryTrack = ({ img, artist, track, mp3 }) => {
    return (
        < Container>
            <div className={styles.categoryTrack}>
                <img className={styles.categoryImg} src={getImageURL(img)} />
                <div className={styles.trackName}>
                    <h3 className={styles.catArtist}>{artist}</h3>
                    <h4 className={styles.catTrack}> {track} </h4>
                </div>
                <audio hidden controls>
                    <source src={getAudioURL(mp3)} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </Container>
    );
}

export default CategoryTrack;
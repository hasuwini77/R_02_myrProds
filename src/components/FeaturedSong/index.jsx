import styles from './FeaturedSong.module.css'
import { getAudioURL, getImageURL } from '../../utils/function';
import Container from 'react-bootstrap/Container';

const FeaturedSong = ({ img, artist, track, mp3 }) => {
    return (
        < Container>
            <div className={styles.featuredSong}>
                <img className={styles.featuredImg} src={getImageURL(img)} />
                <h3 className={styles.artist}>{artist}</h3>
                <h4 className={styles.track}> {track} </h4>
                <audio controls>
                    <source src={getAudioURL(mp3)} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </Container>
    );
}

export default FeaturedSong;
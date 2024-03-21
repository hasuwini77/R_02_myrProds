import styles from './FeaturedSong.module.css'
import { getAudioURL } from '../../utils/function';
import { getImageURL } from '../../utils/function';

const FeaturedSong = ({ img, artist, track, mp3 }) => {
    return (
        <div className={styles.featuredSong}>
            <img src={getImageURL(img)} />
            <h3>{artist}</h3>
            <h4> {track} </h4>
            <audio controls>
                <source src={getAudioURL(mp3)} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default FeaturedSong;
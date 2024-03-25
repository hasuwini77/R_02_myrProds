import styles from "./CategoryTrack.module.css";
import { getAudioURL, getImageURL } from "../../utils/function";

const CategoryTrack = ({ img, artist, track, mp3 }) => {
  return (
    <div className={styles.categoryTrack}>
      <img className={styles.categoryImg} src={getImageURL(img)} />
      <div className={styles.trackName}>
        <h3 className={styles.catArtist}>{artist}</h3>
        <h4 className={styles.catTrack}> {track} </h4>
      </div>
      {/* Currently hiding the audio */}
      <audio hidden controls>
        <source src={getAudioURL(mp3)} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default CategoryTrack;

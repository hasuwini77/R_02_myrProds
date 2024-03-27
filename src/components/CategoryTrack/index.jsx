import styles from "./CategoryTrack.module.css";
import { getAudioURL, getImageURL } from "../../utils/function";

const CategoryTrack = ({ img, artist, track, mp3, onClick }) => {
  return (
    <>
      <div className={styles.categoryTrack} onClick={onClick}>
        <img className={styles.categoryImg} src={getImageURL(img)} />
        <div className={styles.trackName}>
          <h3 className={styles.catArtist}>{artist}</h3>
          <h4 className={styles.catTrack}> {track} </h4>
        </div>
        {/* Currently hiding the audio */}
      </div>
    </>
  );
};

export default CategoryTrack;

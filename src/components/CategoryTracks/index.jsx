import React from "react";
import styles from "./CategoryTracks.module.css";
import CategoryTrack from "../CategoryTrack";

const CategoryTracks = ({ tracks }) => {
  return (
    <div className={styles.categoryTracks}>
      {tracks.map((track, index) => (
        <CategoryTrack key={index} img={track.img} artist={track.artist} track={track.track} mp3={track.mp3} />
      ))}
    </div>
  );
};

export default CategoryTracks;

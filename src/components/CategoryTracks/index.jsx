import React, { useState } from "react";
import styles from "./CategoryTracks.module.css";
import CategoryTrack from "../CategoryTrack";
import ModalTrack from "../Modal";

const CategoryTracks = ({ tracks }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleClick = (clickedTrack) => {
    setSelectedTrack(clickedTrack);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTrack(null);
  };

  return (
    <div className={styles.categoryTracks}>
      {tracks.map((track, index) => (
        <CategoryTrack key={index} img={track.img} artist={track.artist} track={track.track} mp3={track.mp3} onClick={() => handleClick(track)} />
      ))}
      {showModal && selectedTrack && <ModalTrack track={selectedTrack.track} artist={selectedTrack.artist} mp3={selectedTrack.mp3} description={selectedTrack.description} category={selectedTrack.category} img={selectedTrack.img} onHide={handleCloseModal} />}
    </div>
  );
};

export default CategoryTracks;

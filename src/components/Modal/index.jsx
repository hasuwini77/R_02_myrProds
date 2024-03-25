import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getImageURL, getAudioURL } from "../../utils/function";
import styles from "./Modal.module.css";

const ModalTrack = ({ track, artist, mp3, description, img, category, onHide }) => {
  return (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Modal.Title>{track}</Modal.Title>
        </div>
      </Modal.Header>

      <Modal.Body>
        <div className={styles.trackName}>
          <h2>{artist}</h2>
          <p>
            {" "}
            <strong>Story: </strong>
            {description}
          </p>
          <img className={styles.categoryImg} src={getImageURL(img)} />
          <audio controls>
            <source src={getAudioURL(mp3)} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p> Category: {category}</p>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="success" onClick={onHide}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTrack;

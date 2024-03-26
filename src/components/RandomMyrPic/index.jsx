import React from "react";
import styles from "./RandomMyrPic.module.css";
import { getImageURL } from "../../utils/function";

const RandomMyrPic = ({ randomPic }) => {
  return (
    <div className={styles.randomMyrPic}>
      <img src={getImageURL(randomPic)} alt={randomPic} className={styles.img} />
    </div>
  );
};

export default RandomMyrPic;

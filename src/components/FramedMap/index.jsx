import React from "react";
import styles from "./FramedMap.module.css";

const FramedMap = () => {
  return (
    <div className={styles.framedMap}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.8489597921362!2d18.07000911348815!3d59.335475474511405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5c85368e3f%3A0x9c141b271a1722e9!2sBiblioteksgatan%2C%20Stockholm!5e0!3m2!1sfr!2sse!4v1711465862575!5m2!1sfr!2sse"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default FramedMap;

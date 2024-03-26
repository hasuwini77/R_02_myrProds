import React from "react";
import ContactForm from "../../ContactForm";
import { Container } from "react-bootstrap";
import FramedMap from "../../FramedMap";
import styles from "./ContactPage.module.css";
import { randomMyr } from "../../../data/data";
import RandomMyrPic from "../../RandomMyrPic";

const ContactPage = () => {
  return (
    <>
      <Container>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>Contact MYR</h1>
        </div>
        <RandomMyrPic randomPic={randomMyr} />
        <ContactForm />
        <FramedMap />
      </Container>
    </>
  );
};

export default ContactPage;

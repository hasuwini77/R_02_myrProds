import React from "react";
import BasicEvent from "../../BasicEvent";
import { Container } from "react-bootstrap";
import styles from "./EventPage.module.css";

const EventPage = () => {
  return (
    <>
      <Container className={styles.eventContainer}>
        <div className={styles.mainContent}>
          <div className={styles.overlay}>
            <h1 className={styles.title}>Upcoming Events</h1>
            <BasicEvent event="Solstugan MYR Live " img="solstugan.jpg" date=" 2024-05-17" description="MYR will be coming back to Solstugan this summer to show some of his new music and perform a fantastic live lofi beat seshh" />
            <BasicEvent event="Humle & Humle MYR Live " img="humle.jpg" date=" 2024-06-05" description="MYR will be playing his new EP: Magic Dream at the local chill spot Humle & Humle, come to chill and drink some beers! " />
            <BasicEvent event="Dinard Club MYR Live " img="talasso.jpg" date=" 2024-07-11" description="MYR will be playing his new EP: Magic Dream at the local chill spot near Dinard Beach, come to chill and drink some beers! " />
            <BasicEvent event="Saint-Malo MYR Live " img="saintmalo.jpg" date=" 2024-08-04" description="MYR will be playing his new EP: Magic Dream at the local chill spot of Saint-Malo intra-muros! Come to chill and drink some beers! " />
          </div>
        </div>
      </Container>
    </>
  );
};

export default EventPage;

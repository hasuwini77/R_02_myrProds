import React from "react";
import BasicEvent from "../../BasicEvent";
import { Container } from "react-bootstrap";
import styles from "./EventPage.module.css";

const EventPage = () => {
  return (
    <>
      <Container>
        <div className="mainContent">
          <h1 className={styles.title}>Upcoming Events</h1>
        </div>
        <BasicEvent event="Solstugan MYR Live " img="solstugan.jpg" date=" 2024-05-17" description="MYR will be coming back to Solstugan this summer to show some of his new music and perform a fantastic live lofi beat seshh" />
        <BasicEvent event="Humle & Humle MYR Live " img="humle.jpg" date=" 2024-06-05" description="MYR will be playing his new EP: Magic Dream at the local chill spot Humle & Humle, come to chill and drink some beers! " />
      </Container>
    </>
  );
};

export default EventPage;

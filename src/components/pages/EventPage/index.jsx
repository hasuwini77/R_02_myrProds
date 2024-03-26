import React from "react";
import BasicEvent from "../../BasicEvent";
import { Container } from "react-bootstrap";

const EventPage = () => {
  return (
    <>
      <Container>
        <div className="mainContent">
          <h1>Upcoming Events</h1>
        </div>
        <BasicEvent event="Solstugan MYR Live " img="solstugan.jpg" date=" 2024-05-17" description="MYR will be coming back to Solstugan this summer to show some of his new music and perform a fantastic live lofi beat seshh" />
      </Container>
    </>
  );
};

export default EventPage;

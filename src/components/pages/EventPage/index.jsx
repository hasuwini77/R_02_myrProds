import React from "react";
import BasicEvent from "../../EventsList";
import { Container } from "react-bootstrap";

const EventPage = () => {
  return (
    <>
      <Container>
        <div className="mainContent">
          <h1>Upcoming Events</h1>
        </div>
        <BasicEvent />
      </Container>
    </>
  );
};

export default EventPage;

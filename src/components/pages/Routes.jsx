import React from "react";
import { Route, Routes } from "react-router-dom";
import EventPage from "./EventPage";
import Home from "./Home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="event" element={<EventPage />} />
    </Routes>
  );
};

export default RoutesComponent;

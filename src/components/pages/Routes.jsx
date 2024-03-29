import React from "react";
import { Route, Routes } from "react-router-dom";
import EventPage from "./EventPage";
import ContactPage from "./ContactPage";
import Home from "./Home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default RoutesComponent;

// NavComponent.jsx

import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { getImageURL } from "../../utils/function";
import styles from "./Navbar.module.css";

const NavComponent = () => {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className={styles.nav} href="/">
          <img alt="" src={getImageURL("headphones.png")} width="30" height="30" className="d-inline-block align-top" /> MYR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-md-end justify-content-center">
          <Nav className="navbar-nav">
            <Nav.Item style={{ marginLeft: "60px", fontFamily: "Shrikhand, serif" }}>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "60px", fontFamily: "Shrikhand, serif" }}>
              <Nav.Link href="/event">Events</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "60px", marginRight: "100px", fontFamily: "Shrikhand, serif" }}>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;

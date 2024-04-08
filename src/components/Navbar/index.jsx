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
          <Nav className="navbar-nav w-100 justify-content-center justify-content-md-evenly" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
            <Nav.Item>
              <Nav.Link style={{ fontFamily: "Shrikhand, serif" }} href="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ fontFamily: "Shrikhand, serif" }} href="/event">
                Events
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ fontFamily: "Shrikhand, serif" }} href="/contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;

import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getImageURL } from "../../utils/function";
import styles from "./Navbar.module.css";

const Nav = () => {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className={styles.nav} href="#home">
          <img alt="" src={getImageURL("headphones.png")} width="30" height="30" className="d-inline-block align-top" /> MYR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Form className="d-flex align-items-center mb-3 mb-md-0">
            <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
            <Button type="submit" className="ml-sm-2">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;

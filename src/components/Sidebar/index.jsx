import React from "react";
import { Nav } from "react-bootstrap";
import { House } from "react-bootstrap-icons";
import { getImageURL } from "../../utils/function";
import { AiOutlineMessage } from "react-icons/ai";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const boomboxIcon = getImageURL("boombox.svg");

  return (
    <div className={styles.sidebar}>
      <Nav className="flex-column">
        <Nav.Item style={{ marginBottom: "20px" }}>
          <Nav.Link href="#">
            <House size={30} style={{ color: "black" }} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ marginBottom: "20px" }}>
          <Nav.Link href="#">
            <img src={boomboxIcon} alt="Boombox" width="30" height="30" style={{ color: "black" }} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ marginBottom: "20px" }}>
          <Nav.Link href="#">
            <AiOutlineMessage size={30} style={{ color: "black" }} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;

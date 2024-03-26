import Accordion from "react-bootstrap/Accordion";
import { getImageURL } from "../../utils/function";
import styles from "./BasicEvent.module.css";

function BasicEvent({ event, img, date, description }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span className={styles.event}>{event} </span>
          <img src={getImageURL(img)} alt={event} style={{ width: "80px", marginRight: "10px", marginLeft: "20px", borderRadius: "5px" }} />
          <span className={`${styles.date} float-end`}>{date}</span>
        </Accordion.Header>
        <Accordion.Body style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <img src={getImageURL(img)} alt={event} style={{ width: "40%", marginRight: "10px", padding: "10px", borderRadius: "25px" }} />
          <p className={styles.description}> {description} </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicEvent;

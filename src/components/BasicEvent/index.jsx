import Accordion from "react-bootstrap/Accordion";
import { getImageURL } from "../../utils/function";
import styles from "./BasicEvent.module.css";
import Container from "react-bootstrap/Container";

function BasicEvent({ event, img, date, description }) {
  return (
    <Container>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className={styles.heading}>
              <span className={styles.event}>{event} </span>
              <img src={getImageURL(img)} alt={event} className={styles.img} />
              <span className={`${styles.date} float-end`}>{date}</span>
            </div>
          </Accordion.Header>
          <Accordion.Body className={styles.bodyContent}>
            <img src={getImageURL(img)} alt={event} className={styles.bodyImg} />
            <p className={styles.description}> {description} </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default BasicEvent;

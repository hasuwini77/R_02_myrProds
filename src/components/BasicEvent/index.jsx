import Accordion from "react-bootstrap/Accordion";
import { getImageURL } from "../../utils/function";

function BasicEvent({ event, img, date, description }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {event}
          <img src={getImageURL(img)} alt={event} style={{ width: "50px", marginRight: "10px", marginLeft: "20px", borderRadius: "5px" }} />
          <span className="float-end">{date}</span>
        </Accordion.Header>
        <Accordion.Body style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <img src={getImageURL(img)} alt={event} style={{ width: "50%", marginRight: "10px", padding: "10px", borderRadius: "25px" }} />
          {description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicEvent;

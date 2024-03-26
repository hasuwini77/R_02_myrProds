import React from "react";
import { Button } from "react-bootstrap";

const BorderButton = ({ children, onClick, active }) => {
  const buttonStyle = {
    backgroundColor: active ? "black" : "white",
    color: active ? "white" : "black",
    borderColor: "black",
    borderRadius: "5px",
    marginBottom: "10px",
    marginRight: "10px",
    transition: "background-color 0.3s, color 0.3s",
  };

  if (window.matchMedia("(max-width: 768px)").matches) {
    buttonStyle.padding = "6px 10px";
    buttonStyle.fontSize = "0.8rem";
  }

  return (
    <Button variant="outline-dark" style={buttonStyle} onClick={onClick}>
      {children}
    </Button>
  );
};

export default BorderButton;

import React from "react";
import Card from "react-bootstrap/Card";

const cardStyle = {
  boxShadow:
    "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
  width: "100%",
  marginBottom: "2rem",
  fontSize: "1.1rem",
};

function CardPoems(props) {
  return (
    <>
      {["Light"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={cardStyle}
        >
          <Card.Header
            className="poems_title"
            style={{ backgroundColor: "#E0C9A6" }}
          >
            {props.title}
          </Card.Header>
          <Card.Body style={{ backgroundColor: "#f4f0e8" }}>
            <Card.Text>{props.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardPoems;

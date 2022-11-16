import React from "react";
import Card from "react-bootstrap/Card";

function CardPoems(props) {
  return (
    <>
      {["Light"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "100%" }}
          className="card-poems card-nav"
        >
          <Card.Header>{props.title}</Card.Header>
          <Card.Body>
            <Card.Text>{props.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardPoems;

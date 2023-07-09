import React from "react";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";

const cardStyle = {
  boxShadow:
    "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
  marginBottom: "2rem",
  fontSize: "1.1rem",
};

function CardArticles(props) {
  return (
    <>
      {["Light"].map((variant) => (
        <Card
          className="article_card"
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={cardStyle}
        >
          <Card.Header
            className="article_title"
            style={{ backgroundColor: "#E0C9A6" }}
          >
            <Card.Link
              className="article_title-link"
              href={props.url}
              target="_blank"
            >
              {props.title}
            </Card.Link>
          </Card.Header>
          <Card.Body className="article_card-body">
            <Card.Link
              className="article_title-link"
              href={props.url}
              target="_blank"
            >
              <Card.Img
                className="article_image"
                src={props.image}
                alt="Card image"
              />
            </Card.Link>
            <Card.Text className="article_card-text">
              {props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardArticles;

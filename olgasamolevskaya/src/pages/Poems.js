import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardPoems from "../components/CardPoems";
import CarouselPoems from "../components/CarouselPoems";

const Poems = () => {
  return (
    <Container fluid className="body-main">
      <h1 className="header">Poems</h1>
      <section className="card-poems w-100">
        <CarouselPoems />
      </section>
    </Container>
  );
};

export default Poems;

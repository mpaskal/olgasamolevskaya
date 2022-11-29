import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardPoems from "../components/CardPoems";
import SidePoemsRus from "../components/SidePoemsRus";
import poemsrusdata from "../assets/data/PoemsRusData";

const PoemsRus = () => {
  const [navVisible, showNavbar] = useState(true);
  return (
    <>
      <SidePoemsRus visible={navVisible} show={showNavbar} />
      <Container>
        <Row>
          <Col xs="1" md="2" lg="3"></Col>
          <Col xs="10" md="8" lg="6">
            {poemsrusdata.map((poemrus, index) => (
              <div key={index} className="card-poems" id={poemrus.id}>
                <CardPoems title={poemrus.name} text={poemrus.text} />
              </div>
            ))}
          </Col>
          <Col xs="1" md="2" lg="3"></Col>
        </Row>
      </Container>
    </>
  );
};

export default PoemsRus;

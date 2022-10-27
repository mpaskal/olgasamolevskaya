import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container fluid>
      <h1 className="header">Ольга Самолевская</h1>
      <section className="body-color">
        <Row style={{ marginLeft: "0" }}>
          <Col style={{ paddingLeft: "0" }} md={12} lg={4}>
            <img
              className="img-main"
              src="images/Olga-main.jpg"
              alt="Olga Samolevskaya"
            />
          </Col>
          <Col md={12} lg={4}>
            One2
          </Col>
          <Col md={12} lg={4}>
            One3
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Home;

import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  //const stopClickPropagation = (event) => event.stopPropagation();
  return (
    <Fragment>
      <Navbar className="navbar" bg="light" variant="dark" expand="lg">
        <Container fluid className="navigation">
          <Navbar.Brand href="/">Ольга Самолевская</Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/movies">Фільми</Nav.Link>
              <Nav.Link href="/poems">Вiршi</Nav.Link>
              <Nav.Link href="/articles">Статті</Nav.Link>
              <Nav.Link href="/contact">Контакти</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Пошук"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="search">Пошук</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;

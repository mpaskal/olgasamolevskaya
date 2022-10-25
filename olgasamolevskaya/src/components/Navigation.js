import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Fragment>
      <Navbar className="navbar" bg="light" variant="dark" expand="lg">
        <Container fluid className="navigation">
          <Navbar.Brand href="#">Ольга Самолевская</Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href={"/"}>Початок</Nav.Link>
              <NavDropdown title="Фільми" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#movie1">Фільм1</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#movie2">Фільм2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#movie3">Фільм3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#movie4">Фільм4</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#movie5">Фільм5</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Вiршi" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#poem1">Вiршi1</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#poem2">Вiршi2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#poem3">Вiршi3</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="Статті" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#статті1">Статті1</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#статті2">Статті2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#статті3">Статті3</NavDropdown.Item>
              </NavDropdown>
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

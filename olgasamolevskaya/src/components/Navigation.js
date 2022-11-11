import React, { Fragment, useState, useCallback, useMemo } from "react";
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
      <Navbar
        className="navbar sticky-top"
        sticky
        bg="light"
        variant="dark"
        expand="lg"
      >
        <Container fluid className="navigation">
          <Navbar.Brand href="/">Ольга Самолевская</Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav">
            <Nav className="ms-auto my-2 my-lg-3 nav-links">
              <Nav.Link eventKey="Фільми" href="/movies">
                Фільми
              </Nav.Link>
              <Nav.Link eventKey=" Вiршi" href="/poems">
                Вiршi
              </Nav.Link>
              <Nav.Link href="/articles">Статті</Nav.Link>
              <Nav.Link href="/contact">Контакти</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;

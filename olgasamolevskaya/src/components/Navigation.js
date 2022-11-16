import React, { Fragment, useState, useCallback, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import "../App.css";

const Navigation = ({ visible, show }) => {
  return (
    <Navbar
      collapseOnSelect
      className="nav-bar"
      expand="lg"
      variant="dark"
      bg="dark"
    >
      <Container>
        <Navbar.Brand href="/">Ольга Самолевская</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto my-1 my-lg-2">
            <Link className="nav-link" to="/movies">
              Фільми
            </Link>
            <Link className="nav-link" to="/poems">
              Вiршi
            </Link>
            <Link className="nav-link" to="/articles">
              Статті
            </Link>
            <Link className="nav-link" to="/contact">
              Контакти
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

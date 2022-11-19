import React, { Fragment, useState, useCallback, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

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
        <img
          className="logo-img"
          src="images/Olga-main2.jpg"
          alt="Olga Samolevskaya"
        />
        <NavLink className="nav-link" end to="/">
          <Navbar.Brand className="logo-link">
            <h3 className="logo-text">Ольга Самолевська</h3>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto my-1 my-lg-2">
            <NavLink className="nav-link" to="/movies">
              Фільми
            </NavLink>
            <NavLink className="nav-link" to="/poems">
              Вiршi
            </NavLink>
            <NavLink className="nav-link" to="/poemsrus">
              Стихи
            </NavLink>
            <NavLink className="nav-link" to="/articles">
              Статті
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Контакти
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

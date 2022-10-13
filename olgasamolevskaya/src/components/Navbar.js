//import logo from "../images/plm-logo.jpg";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <div className="controls">
          <div className="icon" onClick={() => navigate("/Content")}>
            +
          </div>
          <div className="icon" onClick={() => navigate("/")}>
            home
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

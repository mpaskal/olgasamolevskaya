import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaAngleRight, FaAngleLeft, FaBars } from "react-icons/fa";
import poemsrusdata from "../assets/data/PoemsRusData";

function SidePoemsRus({ visible, show }) {
  return (
    <>
      <section
        className={visible ? "side-links" : "side-links side-links-move"}
      >
        <span className="poems-content">Содержание</span>
        <hr className="sidebar-line" />
        {poemsrusdata.map((item, index) => {
          return (
            <Link key={index} to={item.path} className={item.poemsRusLink}>
              {item.title}
            </Link>
          );
        })}
      </section>
      <section>
        <button
          className={visible ? "sidebar-btn" : "sidebar-btn sidebar-btn-move"}
          type="button"
          onClick={() => show(!visible)}
        >
          {visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button>
      </section>
    </>
  );
}

export default SidePoemsRus;

import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaAngleRight, FaAngleLeft, FaBars } from "react-icons/fa";
import poemsrusdata from "../assets/data/PoemsRusData";

function SidePoemsRus({ visible, show }) {
  return (
    <>
      <section
        className={
          visible ? "sidebar__links" : "sidebar__links sidebar__links--move"
        }
      >
        <div className="poems__list__title">Содержание</div>
        <div className="poems__list">
          {poemsrusdata.map((item, index) => {
            return (
              <Link key={index} to={item.path} className={item.poemsRusLink}>
                {item.title}
              </Link>
            );
          })}
        </div>
      </section>
      <section>
        <button
          className={
            visible ? "sidebar__btn" : "sidebar__btn sidebar__btn--move"
          }
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

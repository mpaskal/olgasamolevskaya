import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaBars } from "react-icons/fa";

function Sidebar({ visible, show }) {
  return (
    <>
      <div className="mobile-nav">
        <button className="mobile-nav-btn" onClick={() => show(!visible)}>
          <FaBars size={24} />
        </button>
      </div>
      <side className={visible ? "" : "sidebar"}>
        <button
          className="side-btn"
          type="button"
          onClick={() => show(!visible)}
        >
          {visible ? <FaAngleLeft size={30} /> : <FaAngleRight size={30} />}
        </button>
        <div className="side-links">
          <Link to="#schoolgirl" className="side-link">
            <span>ШКОЛЬНИЦА</span>
          </Link>
          <Link to="#landscape" className="side-link">
            <span>ТАКОЙ ПЕЙЗАЖ</span>
          </Link>
          <Link to="#ikar" className="side-link">
            <span>ПАДЕНИЕ ИКАРА</span>
          </Link>
        </div>
      </side>
    </>
  );
}

export default Sidebar;

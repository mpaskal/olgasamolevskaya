import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAngleRight, FaAngleLeft, FaBars } from "react-icons/fa";

const SideList = ({ source }) => {
  return (
    <>
      <div className={visible ? "side-row" : "side-row side-row-move"}>
        <span className="poems-content">СОДЕРЖАНИЕ</span>
        <button
          className={visible ? "side-btn" : "side-btn side-btn-move"}
          type="button"
          onClick={() => show(!visible)}
        >
          {visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button>
      </div>
      <div className={visible ? "side-links" : "side-links side-links-move"}>
        {source.map((item, index) => {
          return (
            <Link key={index} to={item.path} className={item.poemsRusLinkText}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SideList;

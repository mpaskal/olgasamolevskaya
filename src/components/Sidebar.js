import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function Sidebar(props) {

  return (
    <>
      <section
        className={
          props.visible ? "sidebar_links" : "sidebar_links sidebar_links:first-child"
        }
      >
        <div className="poems_list_title">{props.sideTitle}</div>
        <div className="poems_list">
          {props.pagedata.map((item, index) => {
            return (
              <Link key={index} to={item.path} className={item.poemsLink}  onClick={() => props.linkClicked("true")}>
                {item.title} 
              </Link>
            );
          })}
        </div>
      </section>
      <section>
        <button
          className={
            props.visible ? "sidebar_btn" : "sidebar_btn sidebar_btn-move"
          }
          type="button"
          onClick={() => props.show(!props.visible)}
        >
          {props.visible ? (
            <FaAngleRight size={30} />
          ) : (
            <FaAngleLeft size={30} />
          )}
        </button>
      </section>
    </>
  );
}

export default Sidebar;

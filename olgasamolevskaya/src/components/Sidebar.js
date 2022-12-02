import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import poemsrusdata from "../assets/data/PoemsRusData";

function Sidebar(props) {
  return (
    <>
      <section
        className={
          props.visible
            ? "sidebar__links"
            : "sidebar__links sidebar__links--move"
        }
      >
        <div className="poems__list__title">{props.sideTitle}</div>
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
            props.visible ? "sidebar__btn" : "sidebar__btn sidebar__btn--move"
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

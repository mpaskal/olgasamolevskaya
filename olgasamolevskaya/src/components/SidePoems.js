import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAngleRight, FaAngleLeft, FaBars } from "react-icons/fa";

function SidePoems({ visible, show }) {
  return (
    <>
      <div className={visible ? "side-row" : "side-row side-row-move"}>
        <span className="poems-content">ЗМIСТ</span>
        <button
          className={visible ? "side-btn" : "side-btn side-btn-move"}
          type="button"
          onClick={() => show(!visible)}
        >
          {visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button>
      </div>
      <div className={visible ? "side-links" : "side-links side-links-move"}>
        <div className="side-links">
          <Link to="#schoolgirl" className="side-link">
            <span>Школьница</span>
          </Link>
          <Link to="#landscape" className="side-link">
            <span>Такой пейзаж</span>
          </Link>
          <Link to="#ikar" className="side-link">
            <span>Падение Икара</span>
          </Link>
          <Link to="#boundless" className="side-link">
            <span>O, безбрежная беспутная Россия!</span>
          </Link>
          <Link to="#suddenly" className="side-link">
            <span>Вдруг остановишься средь суетливого города</span>
          </Link>
          <Link to="#washed" className="side-link">
            <span>Умытый маем мир</span>
          </Link>
          <Link to="#mid" className="side-link">
            <span>Средь города</span>
          </Link>
          <Link to="#walked" className="side-link">
            <span>Шла по линии прибоя</span>
          </Link>
          <Link to="#holdingon" className="side-link">
            <span>Держится кружение Земли</span>
          </Link>
          <Link to="#girl" className="side-link">
            Девочка на шаре
          </Link>
          <Link to="#russian" className="side-link">
            <span>О, русский, верь: зайдёт она</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SidePoems;

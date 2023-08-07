import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Sidebar = ({linkClicked, ...rest}) => {

  return (
    <>
      <section
        className={
          rest.visible ? "sidebar_links" : "sidebar_links sidebar_links-move"
        }
      >
        <div className="poems_list_title">{rest.sideTitle}</div>
        <div className="poems_list">
          {rest.pagedata.map((item, index) => {
            return (
              <Link key={index} to={item.path} className={item.poemsLink}  onClick={() => linkClicked()}>
                {item.title} 
              </Link>
            );
          })}
        </div>
      </section>
      <section>
        <button
          className={
          rest.visible ? "sidebar_btn" : "sidebar_btn sidebar_btn-move"
          }
          type="button"
          onClick={() => rest.show(!rest.visible)}
        >
          {rest.visible ? (
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

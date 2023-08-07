import React, { useState, useEffect } from "react";
import CardPoems from "../components/CardPoems";
import Sidebar from "../components/Sidebar";
import pagedata from "../assets/data/PoemsRusData";

const PoemsRus = () => {
  const [isVisible, setVisibility] = useState(true);
  const data = {
    sideTitle: "Содержание",
  };

  let [isClicked, setClicked] = useState(false);
  function handleClick() {
    setClicked("true");
 }

  useEffect(() => {
    const handleWindowResize = () => {
      let width = window.innerWidth <= 1200;
      setVisibility(!width);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  },[]);

  return (
    <div className="poems">
      <Sidebar
        visible={isVisible}
        show={setVisibility}
        sideTitle={data.sideTitle}
        linkClicked={handleClick}
        pagedata={pagedata}
      />
      <section>
        {pagedata.map((poem, index) => (
          <div key={index} className={`${isClicked ? "card_poems-move" : "card_poems"}`} id={poem.id}>
            <CardPoems title={poem.name} text={poem.text} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default PoemsRus;

import React, { useState } from "react";
import CardPoems from "../components/CardPoems";
import Sidebar from "../components/Sidebar";
import poemsrusdata from "../assets/data/PoemsRusData";

const PoemsRus = () => {
  const [navVisible, showNavbar] = useState(true);
  const data = {
    sideTitle: "Содержание",
  };
  return (
    <div className="poems__rus">
      <Sidebar
        visible={navVisible}
        show={showNavbar}
        sideTitle={data.sideTitle}
      />
      <section className="poems__rus__main">
        {poemsrusdata.map((poemrus, index) => (
          <div key={index} className="card__poems" id={poemrus.id}>
            <CardPoems title={poemrus.name} text={poemrus.text} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default PoemsRus;

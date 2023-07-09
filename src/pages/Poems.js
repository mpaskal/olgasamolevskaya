import React, { useState } from "react";
import CardPoems from "../components/CardPoems";
import Sidebar from "../components/Sidebar";
import pagedata from "../assets/data/PoemsData";

const Poems = () => {
  const [navVisible, showNavbar] = useState(true);
  const data = {
    sideTitle: "Зміст",
  };
  return (
    <div className="poems">
      <Sidebar
        visible={navVisible}
        show={showNavbar}
        sideTitle={data.sideTitle}
        pagedata={pagedata}
      />
      <section>
        {pagedata.map((poem, index) => (
          <div key={index} className="card_poems" id={poem.id}>
            <CardPoems title={poem.name} text={poem.text} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Poems;

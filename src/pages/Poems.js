import React, { useState, useEffect } from "react";
import CardPoems from "../components/CardPoems";
import Sidebar from "../components/Sidebar";
import pagedata from "../assets/data/PoemsData";
// import debounce from "../../helpers/debounce"

const Poems = () => {
  const [isVisible, setVisibility] = useState(true);
  const data = {
    sideTitle: "Зміст",
  };

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

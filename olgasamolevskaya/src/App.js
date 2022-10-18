import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./index.css";

const App = () => {
  return (
    <>
      <div className="app">
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Контакти" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

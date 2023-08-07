import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Poems from "./pages/Poems";
import PoemsRus from "./pages/PoemsRus";
import Movies from "./pages/Movies";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [navVisible, setNavVisible] = useState(true);
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/poems"
          element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <Poems />
            </div>
          }
        />
        <Route
          path="/poemsrus"
          element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <PoemsRus />
            </div>
          }
        />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
};

export default App;

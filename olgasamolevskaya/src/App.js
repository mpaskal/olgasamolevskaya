import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Poems from "./pages/Poems";
import Movies from "./pages/Movies";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./index.css";

const App = () => {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="poems" element={<Poems />} />
            <Route path="articles" element={<Articles />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer year={new Date().getFullYear()} />
      </div>
    </>
  );
};

export default App;

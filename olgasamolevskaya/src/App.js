import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Poems from "./pages/Poems";
import Movies from "./pages/Movies";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const [navVisible, showNavbar] = useState(false);
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route
          path="poems"
          element={
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <Poems />
            </div>
          }
        />
        <Route path="articles" element={<Articles />} />
        <Route path="contact" element={<Contact />} />
        <Route path="poems/#schoolgirl" element={<Poems />} />
        <Route path="poems/#landscape" element={<Poems />} />
        <Route path="poems/#ikar" element={<Poems />} />
        <Route path="poems/#boundless" element={<Poems />} />
        <Route path="poems/#suddenly" element={<Poems />} />
        <Route path="poems/#washed" element={<Poems />} />
        <Route path="poems/#mid" element={<Poems />} />
        <Route path="poems/#walked" element={<Poems />} />
        <Route path="poems/#holdingon" element={<Poems />} />
        <Route path="poems/#girl" element={<Poems />} />
        <Route path="poems/#russian" element={<Poems />} />
      </Routes>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
};

export default App;

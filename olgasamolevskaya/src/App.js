import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
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
          </Route>
        </Routes>
        <Footer year={new Date().getFullYear()} />
      </div>
    </>
  );
};

export default App;

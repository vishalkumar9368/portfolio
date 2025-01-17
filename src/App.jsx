import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Follow from "./components/Follow";
import About from "./components/About";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Follow />
      {/* <About /> */}
    </>
  );
};

export default App;

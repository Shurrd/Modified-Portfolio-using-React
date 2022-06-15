import React from "react";
import Navbar from "./Components/Navbar";
import "./styles.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </>
  );
};

export default App;

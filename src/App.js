import React from "react";
import Navbar from "./Components/Navbar";
import "./styles.css";
import Home from "./Components/Home";
import About from "./Components/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
};

export default App;

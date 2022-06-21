import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import "./styles.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { FaAngleUp } from "react-icons/fa";

const App = () => {
  const [topLink, setTopLink] = useState(false);

  const handleScroll = () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight >= 400) {
      setTopLink(true);
    } else {
      setTopLink(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <button
        onClick={scrollTop}
        className={topLink ? "show-toplink" : "top-link"}
      >
        <FaAngleUp className="fa-angle" />
      </button>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;

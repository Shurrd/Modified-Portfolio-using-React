import React, { useState } from "react";
import Favicon from "../Images/favicon/favicon.png";
import {
  RiMenu4Fill,
  RiCloseFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="nav-container">
        <a href="#home">
          <div className="nav-left">
            <img src={Favicon} alt="Abraham" />
            <h3>#JeSuisAbraham</h3>
          </div>
        </a>
        {/* large screen */}
        <div className="nav-right large-nav">
          {/* Large Screen */}
          <ul className="large-ul">
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#skills">
              <li>Skills</li>
            </a>
            <a href="#portfolio">
              <li>Portfolio</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        {/* small screen */}
        <button className="toggle-icon" onClick={handleToggle}>
          {nav ? <RiCloseFill /> : <RiMenu4Fill />}
        </button>

        <div className={nav ? "small-nav show-nav" : "small-nav"}>
          <div className="icons">
            <a href="#home">
              <RiFacebookBoxFill className="icon" />
            </a>
            <a href="#home">
              <RiTwitterFill className="icon" />
            </a>
            <a href="#home">
              <RiLinkedinBoxFill className="icon" />
            </a>
            <a href="#home">
              <RiInstagramFill className="icon" />
            </a>
            <a href="#home">
              <RiGithubFill className="icon" />
            </a>
          </div>
          <ul className="small-ul">
            <li style={{ marginTop: "2px" }}>
              <img src={Favicon} alt="" />
            </li>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#skills">
              <li>Skills</li>
            </a>
            <a href="#portfolio">
              <li>Portfolio</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

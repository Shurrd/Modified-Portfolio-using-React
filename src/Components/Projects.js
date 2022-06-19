import React from "react";
import Birthday from "../Images/birthday.PNG";
import Krypto from "../Images/kryptoapp.PNG";
import Cocktail from "../Images/cocktaildb.PNG";
import { FaLink, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="section projects">
      <div className="projects-text">
        <h3>MY PROJECTS</h3>
        <h1>Some things i built</h1>
        <p>
          These are some of the projects I have worked on through the course of
          my learning
        </p>
      </div>
      <div className="projects-container">
        <div className="project">
          <div className="project-left">
            <img src={Krypto} alt="krypto" />
          </div>
          <div className="project-right">
            <h1 className="one">01</h1>
            <h1>KRYPTO</h1>
            <p>
              View the trending and most valuable crypto currency in the world
              right now. You can also check the prices and also view the trend
              of the crypto currency for the last 7 days
            </p>
            <div className="tools-container">
              <p>React Js</p>
              <p>React Hooks</p>
              <p>Sparkline</p>
              <p>SCSS</p>
            </div>
            <div className="link-container">
              <a href="https://github.com/Shurrd/krypto-react">
                <FaGithub />
              </a>
              <a href="https://github.com/Shurrd/krypto-react">
                <FaLink />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-right">
            <h1 className="one">02</h1>
            <h1>KRYPTO</h1>
            <p>
              View the trending and most valuable crypto currency in the world
              right now. You can also check the prices and also view the trend
              of the crypto currency for the last 7 days
            </p>
            <div className="tools-container">
              <p>React Js</p>
              <p>React Hooks</p>
              <p>CSS</p>
            </div>
            <div className="link-container">
              <a href="https://github.com/Shurrd/krypto-react">
                <FaGithub />
              </a>
              <a href="https://github.com/Shurrd/krypto-react">
                <FaLink />
              </a>
            </div>
          </div>
          <div className="project-left">
            <img src={Birthday} alt="birthday" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

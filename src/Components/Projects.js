import React from "react";
import Birthday from "../Images/birthday.PNG";
import Krypto from "../Images/kryptoapp.PNG";
import Cocktail from "../Images/cocktaildb.PNG";
import { FaLink, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="section projects" id="projects">
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
              <a href="https://mykryptoapp.netlify.app">
                <FaLink />
              </a>
            </div>
          </div>
        </div>
        <div className="underline"></div>
        <div className="project">
          <div className="project-left">
            <img src={Birthday} alt="birthday" />
          </div>
          <div className="project-right">
            <h1 className="one">02</h1>
            <h1>BIRTHDAYS TODAY</h1>
            <p>
              This is a mini project to determine the birthdays that are
              happening today. This was my first react project.
            </p>
            <div className="tools-container">
              <p>React Js</p>
              <p>React Hooks</p>
              <p>CSS</p>
            </div>
            <div className="link-container">
              <a href="https://github.com/Shurrd/birthday-reminder-using-reactt">
                <FaGithub />
              </a>
              <a href="https://reactjs-birthdays-reminder.netlify.app/">
                <FaLink />
              </a>
            </div>
          </div>
        </div>
        <div className="underline"></div>
        <div className="project">
          <div className="project-left">
            <img src={Cocktail} alt="cocktail" />
          </div>
          <div className="project-right">
            <h1 className="one">03</h1>
            <h1>COCKTAIL DB</h1>
            <p>
              This is a project made using a cocktail api. It includes searching
              of different cocktails using the search bar provided and also
              viewing the information of each cocktail provded also by the
              external API
            </p>
            <div className="tools-container">
              <p>React Js</p>
              <p>React Router DOM</p>
              <p>Cocktail API</p>
              <p>CSS</p>
            </div>
            <div className="link-container">
              <a href="https://github.com/Shurrd/Cocktail-Website">
                <FaGithub />
              </a>
              <a href="https://react-cocktails-website.netlify.app">
                <FaLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

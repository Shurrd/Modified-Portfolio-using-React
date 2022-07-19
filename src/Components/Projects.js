import React from "react";
import Krypto from "../Images/kryptoapp.PNG";
import Cocktail from "../Images/cocktaildb.PNG";
import Feetness from "../Images/feetnessgym.PNG";
import Weather from "../Images/weather.PNG";
import Countries from "../Images/countries.PNG";
import { FaLink, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="projects-text">
        <h1>MY PROJECTS</h1>
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
              <a
                href="https://github.com/Shurrd/krypto-react"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://mykryptoapp.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <FaLink />
              </a>
            </div>
          </div>
        </div>
        <div className="underline"></div>
        <div className="project">
          <div className="project-left">
            <img src={Countries} alt="countries" />
          </div>
          <div className="project-right">
            <h1 className="one">02</h1>
            <h1>REST COUNTRIES API</h1>
            <p>
              This displays all the countries in the world, you can search for a
              specific country and filter based on any region of your choice and
              all comes with a dark mode option.
            </p>
            <div className="tools-container">
              <p>React Js</p>
              <p>React Router DOM</p>
              <p>Rest-Contries API</p>
              <p>Tailwind CSS</p>
              <p>Context API</p>
            </div>
            <div className="link-container">
              <a
                href="https://github.com/Shurrd/rest-countries-api"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://restcountries-api-abraham.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
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
              <a
                href="https://github.com/Shurrd/Cocktail-Website"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://react-cocktails-website.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <FaLink />
              </a>
            </div>
          </div>
        </div>
        <div className="underline"></div>
        <div className="project">
          <div className="project-left">
            <img src={Feetness} alt="feetness gym" />
          </div>
          <div className="project-right">
            <h1 className="one">04</h1>
            <h1>FEETNESS GYM</h1>
            <p>
              Are you feeling unfit, feetness gym is the best website for you to
              track your fitness life and also get new exercise videos from
              youtube and you also have the opportunity to see similar exercises
              relating to your proposed exercise.
            </p>
            <div className="tools-container">
              <p>React Js</p>
              <p>Material UI</p>
              <p>ExerciseDB</p>
              <p>YoutubeDB</p>
              <p>React Router DOM</p>
            </div>
            <div className="link-container">
              <a
                href="https://github.com/Shurrd/Gym-Exercises"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://myfeetnessgym.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLink />
              </a>
            </div>
          </div>
        </div>
        <div className="underline"></div>
        <div className="project">
          <div className="project-left">
            <img src={Weather} alt="weather app" />
          </div>
          <div className="project-right">
            <h1 className="one">05</h1>
            <h1>WEATHER APP</h1>
            <p>
              Checking the weather is really good, especially if you are about
              to embark on a journey or visit a new location. This weather app
              has got you, you can the check the temperature in farenheit for
              any location and you can alos check the humidity, wind speed and
              many more
            </p>
            <div className="tools-container">
              <p>React Js</p>
              <p>Tailwind Css</p>
              <p>OpenWeatherMap API</p>
              <p>TypeScript</p>
            </div>
            <div className="link-container">
              <a
                href="https://github.com/Shurrd/weather-app"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://checkstheweather.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
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

import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import projects from "../utils/data";

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
        {projects.map((project, index) => {
          const { id, name, github, url, image, description, tools } = project;
          return (
            <div className="project" key={index}>
              <div className="project-left">
                <img src={image} alt={name} />
              </div>
              <div className="project-right">
                <h1 className="one">{id}</h1>
                <h1>{name}</h1>
                <p>{description}</p>
                <div className="tools-container">
                  {tools.map((tool, index) => (
                    <p key={index}>{tool.label}</p>
                  ))}
                </div>
                <div className="link-container">
                  <a href={github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href={url} target="_blank" rel="noreferrer">
                    <FaLink />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

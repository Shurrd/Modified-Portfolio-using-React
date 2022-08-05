import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import skills from "../utils/skill";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);
  return (
    <section className="section skills" id="skills" data-aos="fade-up">
      <div className="skills-top">
        <h3>skills</h3>
        <h1>the technologies i work with</h1>
        <p>
          These are some of the skills i have worked with as a self-taught{" "}
          <br />
          developer and i am also currently learning <span>NextJS</span>
        </p>
      </div>
      <div className="skills-bottom">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div className="skill" key={index}>
              <Icon className="skills-icon" size={70} />
              <h3>{skill.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

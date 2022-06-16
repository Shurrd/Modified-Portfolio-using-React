import React from "react";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiSass,
  SiFirebase,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="section skills" id="skills">
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
        <div className="skill">
          <SiHtml5 className="skills-icon" size={70} />
          <h3>html5</h3>
        </div>
        <div className="skill">
          <SiCss3 className="skills-icon" size={70} />
          <h3>css3</h3>
        </div>
        <div className="skill">
          <SiJavascript className="skills-icon" size={70} />
          <h3>JavaScript(ES6+)</h3>
        </div>
        <div className="skill">
          <SiBootstrap className="skills-icon" size={70} />
          <h3>bootstrap</h3>
        </div>
        <div className="skill">
          <SiReact className="skills-icon" size={70} />
          <h3>reactjs</h3>
        </div>
        <div className="skill">
          <SiTailwindcss className="skills-icon" size={70} />
          <h3>tailwind css</h3>
        </div>
        <div className="skill">
          <SiGit className="skills-icon" size={70} />
          <h3>git</h3>
        </div>
        <div className="skill">
          <SiSass className="skills-icon" size={70} />
          <h3>sass</h3>
        </div>
        <div className="skill">
          <SiFirebase className="skills-icon" size={70} />
          <h3>firebase</h3>
        </div>
        <div className="skill">
          <SiPython className="skills-icon" size={70} />
          <h3>python</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import Abraham from "../Images/abraham.JPG";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="about-left">
        <img src={Abraham} alt="abraham" />
      </div>
      <div className="about-right">
        <div className="about-text">
          <h1>About ME</h1>
          <p>
            A recent graduate leveraging studies in Electrical and Electronics
            Engineering and equally gaining skills in software development who
            is easily able to adapt to new environments and has excellent
            organizational and positive interpersonal skills who is also highly
            motivated, organized and target oriented seeks real-world experience
            as an Electrical and Software Engineer.
            <br />
            <br />
            <br />
            I am not all "Geeky" haha 😉, <br />
            You can also catch be gaming as well as watching basketball and
            soccer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

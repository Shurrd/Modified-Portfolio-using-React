import React from "react";
import Computer from "../Images/computer.png";

const Home = () => {
  return (
    <section className="section home">
      <div className="home-left">
        <h4>Hi guys , I am</h4>
        <h1>adeyemi abraham</h1>
        <p>
          A Nigerian based self taught Front-End Web Developer and an aspiring
          block chain developer who is specialized in building exceptional
          responsive websites for better experience
        </p>
        <a href="#home" className="home-btn">
          <button className="btn btn-home">Hire Me</button>
        </a>
      </div>

      <div className="home-right">
        <img src={Computer} alt="computer" />
      </div>
    </section>
  );
};

export default Home;

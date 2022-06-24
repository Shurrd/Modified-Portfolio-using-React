import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);
  return (
    <section className="section contact" id="contact" data-aos="fade-up">
      <h3 className="h3">Have a Project? or just looking to hire?</h3>
      <h1>Let's Work Together </h1>
      <p>
        Feel free to reach out if you're looking to hire, just want to connect
        or see if we can build something amazing together.
      </p>
      <a href="mailto: engraaadeyemi@gmail.com" className="btn mail-btn">
        GET IN TOUCH
      </a>
      <p id="copy">(or copy) engraaadeyemi@gmail.com</p>
    </section>
  );
};

export default Contact;

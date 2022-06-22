import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        &copy; <span>{new Date().getFullYear()}</span> Adeyemi Abraham
      </div>
      <div className="footer-right">
        <a href="https://github.com/Shurrd">github</a>
        <a href="https://twitter.com/shurrrrd">Twitter</a>
        <a href="https://www.linkedin.com/in/adeoluwa-adeyemi-45743222b/">
          Linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;

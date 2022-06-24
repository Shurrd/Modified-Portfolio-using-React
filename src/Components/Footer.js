import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        &copy; <span>{new Date().getFullYear()}</span> Adeyemi Abraham
      </div>
      <div className="footer-right">
        <a href="https://github.com/Shurrd" target="_blank" rel="noreferrer">
          github
        </a>
        <a href="https://twitter.com/shurrrrd" target="_blank" rel="noreferrer">
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/adeoluwa-adeyemi-45743222b/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;

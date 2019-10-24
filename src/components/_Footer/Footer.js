import React from "react";
import "./Footer.css";
import reactLogo from "../../media/react.png";

const Footer = props => {
  return (
    <footer id="footer">
      <a href="https://reactjs.org/" target="_blank">
        <img className="image--motion" src={reactLogo} alt="Built with React" />
      </a>
    </footer>
  );
};

export default Footer;

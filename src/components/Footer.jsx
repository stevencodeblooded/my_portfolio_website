import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="footer">
        <li><a href="https://facebook.com" ><FontAwesomeIcon icon={faFacebook} className="social-icons" /></a></li>
        <li><a href="https://twitter.com" ><FontAwesomeIcon icon={faTwitter} className="social-icons" /></a></li>
        <li><a href="https://instagram.com" ><FontAwesomeIcon icon={faInstagram} className="social-icons" /></a></li>
        <li><a href="https://github.com/stevencodeblooded/"><FontAwesomeIcon icon={faGithub} className="social-icons" /></a></li>
        <li><a href="https://www.linkedin.com/in/steven-ochieng-aa11b721a/"><FontAwesomeIcon icon={faLinkedin} className="social-icons" /></a></li>
      </ul>
      <p className="footer-paragraph">
        © 2023 Copyright : <span className="bold">Steven O. Ochieng</span>
      </p>
    </footer>
  );
};

export default Footer;

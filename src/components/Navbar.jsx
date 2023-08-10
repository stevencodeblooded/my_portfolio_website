import React from "react";

import { Link } from "react-router-dom";
import Resume from "../assets/Resume.pdf";
import LogoNav from '../assets/logo-nav.png'

const Navbar = () => {
  return (
    <nav className="nav-links">
      <img src={LogoNav} alt="nav-logo" className="logo__nav" />
      <ul className="list-nav">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/Work" className="link">
            Work
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="link">
            Contact
          </Link>
        </li>
        <li>
          <a
            className="nav-anchor"
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

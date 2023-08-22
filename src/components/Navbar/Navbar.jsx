import React, { useState } from "react";

import { Link } from "react-router-dom";
import Resume from "../../assets/Resume.pdf";
import LogoNav from '../../assets/logo-nav.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import './Navbar.css'

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false)

  const handleToggleNav  = () => {
    setShowLinks(!showLinks)
  }

  return (
    <nav className="nav-links">

      <a href="/" className="logo-link">
        <img src={LogoNav} alt="nav-logo" className="logo__nav" />
      </a>
      
      <div className="toggle-nav" onClick={handleToggleNav}>
          <FontAwesomeIcon icon={showLinks ? faTimes : faBars} />
      </div>

      <ul className={showLinks ? 'show-links-nav' : 'list-nav'}>
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

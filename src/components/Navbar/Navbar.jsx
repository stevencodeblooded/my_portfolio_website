import React, { useState } from "react";

import { NavLink } from "react-router-dom";
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
  
  const handleCloseMenu = () => setShowLinks(false) 
  
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
          <NavLink to="/" onClick={handleCloseMenu} className={({isActive}) => isActive ? 'active-link' : 'link'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" onClick={handleCloseMenu} className={({isActive}) => isActive ? 'active-link' : 'link'} >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Work" onClick={handleCloseMenu} className={({isActive}) => isActive ? 'active-link' : 'link' }>
            Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" onClick={handleCloseMenu} className={({isActive}) => isActive ? 'active-link' : 'link'}>
            Contact
          </NavLink>
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

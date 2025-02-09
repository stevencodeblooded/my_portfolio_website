import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Resume from "../../assets/Steven Ochieng ResumeCV.pdf";
import LogoNav from '../../assets/logoNew.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBars, 
  faTimes, 
  faSun,
  faMoon 
} from "@fortawesome/free-solid-svg-icons";

import './Navbar.css';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null); // Add this
  const themeDark = () => {
    toggleTheme()
    setIsOpen(false)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handling clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e, index) => {
    const navItems = document.querySelectorAll('.nav-item');
    if (e.key === 'ArrowRight' && index < navItems.length - 1) {
      navItems[index + 1].focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      navItems[index - 1].focus();
    }
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/About', label: 'About' },
    { path: '/Work', label: 'Work' },
    { path: '/Contact', label: 'Contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header ref={navRef} className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="nav-container">
        {/* Logo */}
        <Link to="/" onClick={() => (setIsOpen(false))} className={`logo-link ${scrolled ? 'logo-scrolled' : ''}`}>
          <img src={LogoNav} alt="logo" className="nav-logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        {/* Navigation Links */}
        <div className={`nav-links-wrapper ${isOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={item.label} className="nav-item">
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={0}
                >
                  {item.label}
                  <span className="link-underline"></span>
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <button
                className="theme-toggle"
                onClick={themeDark}
                aria-label="Toggle dark mode"
              >
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
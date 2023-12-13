import React from "react";

import './Project.css'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faPhp, faReact, faNode } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import rentmyspace from '../../../assets/RentMySpace.png'
import pensiumAtrium from '../../../assets/Pensium Atrium.png'
import northMan from '../../../assets/NorthMan.png'
import sunfoxSolar from '../../../assets/Sunfox Solar.png'
import organizeHR from '../../../assets/OrganizeHR.png'
import shareplaces from '../../../assets/SharePlaces.png'

const Project = () => {
  return (
    <div className="container-source-project">
      <h2 className="projects-heading" data-aos='fade-right' data-aos-duration='2000'>Projects</h2>
      <div className="project" data-aos='fade-up' data-aos-duration='2000'>
      <div className="all-projects">
        
        {/* First Project */}
        <div className="project-container">
          <img src={pensiumAtrium} alt="Rent My Space" className="rentmyspace"/>
          <h3>
            <Link to='https://pension-atrium.vercel.app/' target="_blank">Pensium Atrium</Link>
          </h3>
          <p>
            Developed a sleek and user-friendly frontend for Pension Atrium, 
            a booking accommodations project, utilizing TypeScript and Tailwind CSS 
            to enhance the user experience in the prime and affordable location near the 
            historical center of Trutnov.
          </p>
          
          <p>Technologies used: </p>
          <div className="technologies">
            <span>
              <FontAwesomeIcon icon={faHtml5} className="icon" /> HTML
            </span>
            <span>
              <FontAwesomeIcon icon={faCss3} className="icon" /> Tailwind CSS
            </span>
            <span>
              <FontAwesomeIcon icon={faReact} className="icon" /> React JS
            </span>
          </div>

          <div className="work-links">
            <a
              href="https://github.com/stevencodeblooded/pension-atrium"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              >
              GitHub Repository
            </a>

            <a
              href='https://pension-atrium.vercel.app/'
              target="_blank"
              rel="noopener noreferrer"
              >
              View Live 
            </a>

          </div>

        </div>
        <div className="project-container">
          <img src={sunfoxSolar} alt="Rent My Space" className="rentmyspace"/>
          <h3>
            <Link to='https://sunfox-solar.vercel.app/' target="_blank">Sunfox Solar</Link>
          </h3>
          <p>
            Crafted an engaging landing page for SunFox Solar using TypeScript and Tailwind CSS, showcasing a seamless blend of design and functionality to highlight the company's solar solutions.
          </p>
          
          <p>Technologies used: </p>
          <div className="technologies">
            <span>
              <FontAwesomeIcon icon={faHtml5} className="icon" /> HTML
            </span>
            <span>
              <FontAwesomeIcon icon={faCss3} className="icon" /> Tailwind CSS
            </span>
            <span>
              <FontAwesomeIcon icon={faReact} className="icon" /> React JS
            </span>
          </div>

          <div className="work-links">
            <a
              href="https://github.com/stevencodeblooded/SunfoxSolar"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              >
              GitHub Repository
            </a>

            <a
              href='https://sunfox-solar.vercel.app/'
              target="_blank"
              rel="noopener noreferrer"
              >
              View Live 
            </a>

          </div>

        </div>
        <div className="project-container">
          <img src={northMan} alt="Rent My Space" className="rentmyspace"/>
          <h3>
            <Link to='https://northman-chi.vercel.app/' target="_blank">Northman Law Firm</Link>
          </h3>
          <p>
            Designed and implemented the Northman Law Firm website, seamlessly combining professionalism and aesthetic appeal to effectively showcase the firm's image and services
          </p>
          
          <p>Technologies used: </p>
          <div className="technologies">
            <span>
              <FontAwesomeIcon icon={faHtml5} className="icon" /> HTML
            </span>
            <span>
              <FontAwesomeIcon icon={faCss3} className="icon" /> Tailwind CSS
            </span>
            <span>
              <FontAwesomeIcon icon={faJs} className="icon" /> React JS
            </span>
          </div>

          <div className="work-links">
            <a
              href="https://github.com/stevencodeblooded/northman"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              >
              GitHub Repository
            </a>

            <a
              href='https://northman-chi.vercel.app/'
              target="_blank"
              rel="noopener noreferrer"
              >
              View Live 
            </a>

          </div>

        </div>
        <div className="project-container">
          <img src={rentmyspace} alt="Rent My Space" className="rentmyspace"/>
          <h3>
            <Link to='https://rentmyspacewebsite.000webhostapp.com/' target="_blank">Rent My Space</Link>
          </h3>
          <p>
            A sophisticated web application that
            empowers hosts to seamlessly list their apartments for travelers or
            guests to book. This feature-rich platform also incorporates Stripe
            payment integration for secure and hassle-free transactions.
          </p>
          
          <p>Technologies used: </p>
          <div className="technologies">
            <span>
              <FontAwesomeIcon icon={faHtml5} className="icon" /> HTML
            </span>
            <span>
              <FontAwesomeIcon icon={faCss3} className="icon" /> CSS
            </span>
            <span>
              <FontAwesomeIcon icon={faJs} className="icon" /> JavaScript
            </span>
            <span>
              <FontAwesomeIcon icon={faDatabase} className="icon" /> MySQL
            </span>
            <span>
              <FontAwesomeIcon icon={faPhp} className="icon" /> PHP
            </span>
          </div>

          <div className="work-links">
            <a
              href="https://github.com/stevencodeblooded/rentmyspaceproject"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              >
              GitHub Repository
            </a>

            <a
              href='https://rentmyspacewebsite.000webhostapp.com/'
              target="_blank"
              rel="noopener noreferrer"
              >
              View Live 
            </a>

          </div>

        </div>

        {/* Second Project */}
        <div className="project-container">
          <img src={organizeHR} alt="organizeHR" className="organizeHR" />
          <h3>
            <Link to='https://organizehr.netlify.app/' target="_blank">OrganizeHR</Link>
          </h3>
          <p>
            Developing a comprehensive HR management application, 'OrganizeHR,' 
            optimizing HR processes and user experience
          </p>

          <p>Technologies used: </p>
          <div className="technologies">
            <span>
              <FontAwesomeIcon icon={faReact} className="icon" /> React JS
            </span>
            <span>
              <FontAwesomeIcon icon={faHtml5} className="icon" /> HTML
            </span>
            <span>
              <FontAwesomeIcon icon={faCss3} className="icon" /> CSS
            </span>
            <span>
              <FontAwesomeIcon icon={faDatabase} className="icon" /> Firebase
            </span>
          </div>

          <div className="work-links">
            <a
              href="https://github.com/stevencodeblooded/organizehr"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              >
              GitHub Repository
            </a>

            <a
              href='https://organizehr.netlify.app/'
              target="_blank"
              rel="noopener noreferrer"
              >
              View Live 
            </a>

          </div>
        </div>

        {/* Third Project */}
        <div className="project-container">
          <img src={shareplaces} alt="shareplaces" className="shareplaces"/>
          <h3>
            <Link to='https://shareplacesonline.netlify.app/' target="_blank">Share Places Online</Link>
          </h3>
          <p>
            Discover, share, and explore places with this platform, where users can 
            upload photos, provide titles, and share Google directions to 
            their favorite destinations.
          </p>
          
          <p>Technologies used: </p>
          <div className="technologies">
            <span>
              <FontAwesomeIcon icon={faDatabase} className="icon" /> Mongo DB
            </span>
            <span>
              <FontAwesomeIcon icon={faNode} className="icon" /> Express
            </span>
            <span>
              <FontAwesomeIcon icon={faReact} className="icon" /> React
            </span>
            <span>
              <FontAwesomeIcon icon={faNode} className="icon" /> Node JS
            </span>
          </div>

          <div className="work-links">
            <a
              href="https://github.com/stevencodeblooded/SharePlaces"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              >
              GitHub Repository
            </a>

            <a
              href='https://shareplacesonline.netlify.app/'
              target="_blank"
              rel="noopener noreferrer"
              >
              View Live 
            </a>

          </div>

        </div>

      </div>
    </div>
    </div>
  );
};

export default Project;

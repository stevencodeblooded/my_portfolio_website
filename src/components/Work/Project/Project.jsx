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
    <div className="project-container">
      <div>
        <h2 className="projects-heading" data-aos='fade-right' data-aos-duration='2000'>Projects</h2>
        <div className="all-projects">
          <a href='https://pension-atrium.vercel.app/' data-aos='fade-up' data-aos-duration='1000' target="_blank" rel="noopener noreferrer" className="ind-project">
            <img src={pensiumAtrium} alt="Rent My Space" className="project-img" />
            <div className="project-description">
              <h3>
                <Link to='https://pension-atrium.vercel.app/' target="_blank">Pensium Atrium</Link>
              </h3>
              <p className="sm-text">
                Crafted a user-friendly frontend for Pension Atrium, a booking accommodations project, 
                improving the user experience near Trutnov's historical center.
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
          </a>

          <a href="https://sunfox-solar.vercel.app/" data-aos='fade-up' data-aos-duration='2000' target="_blank" rel="noopener noreferrer" className="ind-project">
            <img src={sunfoxSolar} alt="Rent My Space" className="project-img" />
            <div className="project-description">
              <h3>
                <Link to='https://sunfox-solar.vercel.app/' target="_blank">Sunfox Solar</Link>
              </h3>
              <p className="sm-text">
                Designed SunFox Solar's engaging landing page with TypeScript and Tailwind CSS, seamlessly showcasing the company's solar solutions.
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
          </a>
          <a href="https://sunfox-solar.vercel.app/" data-aos='fade-up' data-aos-duration='3000' target="_blank" rel="noopener noreferrer"  className="ind-project">
            <img src={northMan} alt="Rent My Space" className="project-img" />
            <div className="project-description">
              <h3>
                <Link to='https://northman-chi.vercel.app/' target="_blank">Northman Law Firm</Link>
              </h3>
              <p className="sm-text">
                Developed Northman Law Firm's website, seamlessly merging professionalism
                and aesthetic appeal to showcase the firm's image and services effectively.
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
          </a>
          <a href="https://rentmyspacewebsite.000webhostapp.com/" data-aos='fade-up' data-aos-duration='1000' target="_blank" rel="noopener noreferrer" className="ind-project">
            <img src={rentmyspace} alt="Rent My Space" className="project-img" />
            <div className="project-description">
              <h3>
                <Link to='https://rentmyspacewebsite.000webhostapp.com/' target="_blank">Rent My Space</Link>
              </h3>
              <p className="sm-text">
                Sophisticated web app empowers hosts to list apartments for travelers.
                Features Stripe integration for secure transactions.
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
          </a>

          <a href="http://organizehr.netlify.app/" data-aos='fade-up' data-aos-duration='2000' target="_blank" rel="noopener noreferrer" className="ind-project">
            <img src={organizeHR} alt="organizeHR" className="project-img" />
            <div className="project-description">
              <h3>
                <Link to='https://organizehr.netlify.app/' target="_blank">OrganizeHR</Link>
              </h3>
              <p className="sm-text">
                Created 'OrganizeHR,' a comprehensive HR management website app optimizing processes and
                user experience.
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
          </a>
          <a href="http://shareplacesonline.netlify.app/" data-aos='fade-up' data-aos-duration='3000' target="_blank" rel="noopener noreferrer" className="ind-project">
            <img src={shareplaces} alt="shareplaces" className="project-img" />
            <div className="project-description">
              <h3>
                <Link to='https://shareplacesonline.netlify.app/' target="_blank">Share Places Online</Link>
              </h3>
              <p className="sm-text">
                Platform allows users to discover, share, and explore places by uploading
                photos and providing titles, along with Google directions.
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

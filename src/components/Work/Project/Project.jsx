import React from "react";

import './Project.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faPhp, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  return (
    <div className="project">
      <h2>Projects</h2>
      <div className="project-1">
        <p>
          <span>A).</span> Introducing "Rent My Space" - a sophisticated web application that
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
            target="blank"
            rel="noopener noreferrer"
            >
            View Live 
          </a>

        </div>

        <p><span>B).</span> Developing a comprehensive HR management application, 'OrganizeHR,' optimizing HR processes and user experience</p>

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
            <FontAwesomeIcon icon={faDatabase} className="icon" /> Mongo DB
          </span>
          <span>
            <FontAwesomeIcon icon={faNode} className="icon" /> Node JS
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
            target="blank"
            rel="noopener noreferrer"
            >
            View Live 
          </a>

        </div>
        
      </div>
    </div>
  );
};

export default Project;

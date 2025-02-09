import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";

import './Skills.css'

const Skill = () => {
  return (
    <div className="skill">
      <h2>Skills and Knowledge</h2>

      <div className="skill_container">
        <div className="frontend_skills" data-aos='fade-right' data-aos-duration='2000'>
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article>
              <FontAwesomeIcon icon={faCheckToSlot} className="skill-icon" />
              <div>
                <h4>HTML</h4>
                <small className="light-text">Experienced</small>
              </div>
            </article>
            <article>
              <FontAwesomeIcon icon={faCheckToSlot} className="skill-icon" />
              <div>
                <h4>CSS</h4>
                <small className="light-text">Experienced</small>
              </div>
            </article>
            <article>
              <FontAwesomeIcon icon={faCheckToSlot} className="skill-icon" />
              <div>
                  <h4>JavaScript</h4>
                  <small className="light-text">Experienced</small>
              </div>
            </article>
            <article>
              <FontAwesomeIcon icon={faCheckToSlot} className="skill-icon" />
              <div>
                <h4>React JS</h4>
                <small className="light-text">Intermediate</small>
              </div>
            </article>
            <article>
              <FontAwesomeIcon icon={faCheckToSlot} className="skill-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="light-text">Intermediate</small>
              </div>
            </article>
            <article>
              <FontAwesomeIcon icon={faCheckToSlot} className="skill-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="light-text">Experienced</small>
              </div>
            </article>
            
          </div>
        </div>

        <div className="backend_skills" data-aos='fade-left' data-aos-duration='2000'>
          <h3>Backend Development</h3>
          <div className="skill_content">
            <article>
              <FontAwesomeIcon icon={faCheckToSlot} className="skill-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="light-text">Experienced</small>
              </div>
            </article>
            <article>
              <FontAwesomeIcon icon={faCheckToSlot} className="skill-icon" />
              <div>
                <h4>Express JS</h4>
                <small className="light-text">Experienced</small>
              </div>
            </article>
            <article>
              <FontAwesomeIcon icon={faCheckToSlot} className="skill-icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="light-text">Experienced</small>
              </div>
            </article>
            <article>
              <FontAwesomeIcon icon={faCheckToSlot} className="skill-icon" />
              <div>
                <h4>Mongoose</h4>
                <small className="light-text">Experienced</small>
              </div>
            </article>
            <article>
              <FontAwesomeIcon icon={faCheckToSlot} className="skill-icon" />
              <div>
                <h4>MYSQL</h4>
                <small className="light-text">Intermediate</small>
              </div>
            </article>
            <article>
              <FontAwesomeIcon icon={faCheckToSlot} className="skill-icon" />
              <div>
                <h4>Next JS</h4>
                <small className="light-text">Experienced</small>
              </div>
            </article>
            {/* <article>
              <FontAwesomeIcon icon={faCheckToSlot} className="skill-icon" />
              <div>
                <h4>PHP</h4>
                <small className="light-text">Intermediate</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

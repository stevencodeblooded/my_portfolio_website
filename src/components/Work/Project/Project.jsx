import './Project.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import rentmyspace from '../../../assets/RentMySpace.png'
import pensiumAtrium from '../../../assets/Pensium Atrium.png'
import northMan from '../../../assets/NorthMan.png'
import smsSavant from '../../../assets/sms savant.png'
import nexship from '../../../assets/nexship.png'
import imageryEccommerce from '../../../assets/Imagery-Eccommerce.png'

const Project = () => {
  return (
    <div className="project-container">
      <div>
        <h2 className="projects-heading" data-aos='fade-right' data-aos-duration='2000'>Projects</h2>
        <div className="all-projects">

        <div className="ind-project" data-aos='fade-up' data-aos-duration='2000'>
            <img src={nexship} alt="organizeHR" className="project-img" />
            <div className="project-description">
              <h3>
                <Link to='https://nexship.vercel.app/' target="_blank">Nexship</Link>
              </h3>
              <p className="sm-text">
                NexShip is Canada's premier fulfillment and delivery service, specializing in B2B retail, e-commerce, and healthcare fulfillment
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
              </div>

              <div className="work-links">
                <a
                  href="https://github.com/stevencodeblooded/nexship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Repository
                </a>

                <a
                  href='https://nexship.vercel.app/'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>

              </div>
            </div>
          </div>

          <div className="ind-project" data-aos='fade-up' data-aos-duration='2000'>
            <img src={smsSavant} alt="Rent My Space" className="project-img" />
            <div className="project-description">
              <h3>
                <Link to='https://smssavant.netlify.app/' target="_blank">SMS Savant</Link>
              </h3>
              <p className="sm-text">
                Developed an intuitive multi webpage with clear navigation and visually appealing elements.
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
                  href="https://github.com/stevencodeblooded/smssavant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Repository
                </a>

                <a
                  href='https://smssavant.netlify.app/'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>

              </div>
            </div>
          </div>

          <div className="ind-project" data-aos='fade-up' data-aos-duration='2000'>
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
          </div>

          <div className="ind-project" data-aos='fade-up' data-aos-duration='2000'>
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
          </div>

          <div className="ind-project" data-aos='fade-up' data-aos-duration='2000'>
            <img src={imageryEccommerce} alt="shareplaces" className="project-img" />
            <div className="project-description">
              <h3>
                <Link to='https://imagery-eccommerce.vercel.app/' target="_blank">The Imagery</Link>
              </h3>
              <p className="sm-text">
                A website that allows discovery and purchase of top-quality Lightroom Presets that elevate content creation.
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
                  <FontAwesomeIcon icon={faReact} className="icon" /> React
                </span>
              </div>

              <div className="work-links">
                <a
                  href="https://github.com/stevencodeblooded/imagery_eccommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Repository
                </a>

                <a
                  href='https://imagery-eccommerce.vercel.app/'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>

              </div>
            </div>
          </div>

          <div className="ind-project" data-aos='fade-up' data-aos-duration='2000'>
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
          </div>

        </div>
      </div>
    </div>
  );
};

export default Project;

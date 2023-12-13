import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faPhp } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import rentmyspace from '../../../assets/RentMySpace.png'

import './ProjectsCarousel.css'

const ProjectsCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
    <div className='container'>
        <Slider {...settings}>
      <div>
      <div className="project-container-carousel">
          <img src={rentmyspace} alt="Rent My Space" className="project-display-image"/>
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
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </div>
  )
}

export default ProjectsCarousel
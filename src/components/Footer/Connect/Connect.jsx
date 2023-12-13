import React from 'react'

import { Link } from 'react-router-dom';
import './Connect.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Connect = () => {
  return (
    <div className='connect'>
      <section>
        <h2>Connect With Me</h2>
        <p>I am looking to connect with those who share an interest in a sustainable environment. Lorem, ipsum dolor.</p>

        <div className='social-icons'>
            <a
              target="_blank" 
              rel="noopener noreferrer"  
              href='https://www.facebook.com/stevo.otieno.cruzah'>
              <FontAwesomeIcon icon={faFacebook} className='icon' />
            </a>

            <a
              target="_blank" 
              rel="noopener noreferrer"  
              href='https://instagram.com'>
              <FontAwesomeIcon icon={faInstagram} className='icon' />
            </a>

            <a
              target="_blank" 
              rel="noopener noreferrer"  
              href='https://twitter.com/_ochieng_steven'>
              <FontAwesomeIcon icon={faTwitter} className='icon' />
            </a>

            <a
              target="_blank" 
              rel="noopener noreferrer"  
              href='https://www.linkedin.com/in/stevenochieng/'>
              <FontAwesomeIcon icon={faLinkedin} className='icon' />
            </a>

            <a
              target="_blank" 
              rel="noopener noreferrer"  
              href='https://github.com/stevencodeblooded/'>
              <FontAwesomeIcon icon={faGithub} className='icon' />
            </a>

        </div>

      </section>

      <section>
        <h2>Contact Me</h2>
        <p>Get in touch with me. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit!</p>
        <Link to={'/Contact'} className='contact-link'>Contact Me</Link>
      </section>
    </div>
  )
}

export default Connect
import React from 'react'

import './SharePage.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SharePage = () => {
  return (
    <div className='share-page'>
        <section className='share'>
            <FontAwesomeIcon icon={faShareAlt} className='share-image'/>
            <h2>Share this page</h2>
        </section>

        <section className='socials'>
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href='https://www.facebook.com/stevo.otieno.cruzah'
            >
              <FontAwesomeIcon icon={faFacebook} className='icon' />
            </a>

            <a
              target="_blank" 
              rel="noopener noreferrer" 
              href='https://instagram.com'
            >
              <FontAwesomeIcon icon={faInstagram} className='icon' />
            </a>

            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href='https://twitter.com/_ochieng_steven'
            >
              <FontAwesomeIcon icon={faTwitter} className='icon' />
            </a>

            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href='https://www.linkedin.com/in/stevenochieng/'
            >
              <FontAwesomeIcon icon={faLinkedin} className='icon' />
            </a>

            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href='https://github.com/stevencodeblooded/'
            >
              <FontAwesomeIcon icon={faGithub} className='icon' />
            </a>
        </section>
    </div>
  )
}

export default SharePage
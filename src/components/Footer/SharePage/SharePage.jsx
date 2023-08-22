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
            <a href='https://facebook.com'><FontAwesomeIcon icon={faFacebook} className='icon' /></a>
            <a href='https://instagram.com'><FontAwesomeIcon icon={faInstagram} className='icon' /></a>
            <a href='https://twitter.com'><FontAwesomeIcon icon={faTwitter} className='icon' /></a>
            <a href='https://linkedin.com'><FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
            <a href='https://github.com/stevencodeblooded/rentmyspaceproject'><FontAwesomeIcon icon={faGithub} className='icon' /></a>
        </section>
    </div>
  )
}

export default SharePage
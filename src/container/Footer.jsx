import React from 'react'

import SharePage from '../components/Footer/SharePage/SharePage'
import Connect from '../components/Footer/Connect/Connect'
import Copyright from '../components/Footer/Copyright/Copyright'

import '../index.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <SharePage />
        <Connect />
        <Copyright />
    </div>
  )
}

export default Footer
import React from 'react'

import './Copyright.css'

const Copyright = () => {
  const year = new Date().getFullYear()
  return (
    <div className='copyright'>
      <p>This is Steven Ochieng's Portfolio - A Web Developer and an ICT Technical Support</p>
      <p> © {year} Copyright : <a href='https://linkedin.com/in/stevenochieng' target='_blank' rel="noreferrer" className="name">Steven O. Ochieng</a></p>
    </div>
  )
}

export default Copyright
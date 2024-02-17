import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from '@fortawesome/free-solid-svg-icons'

import './Title.css'
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <div className='title' data-aos='fade-down' data-aos-duration='3000'>
        <div className='logo'>
          <FontAwesomeIcon icon={faComputer}  className='title-logo'/>
        </div>
        <p className='title-text'>
          If <span className='title-span'>bugs</span> persist, it's time to consult <Link to={'/Contact'} style={{textDecoration: 'none'}}><span className='title-span'>codeblooded</span></Link> for swift solutions.
        </p>
    </div>
  )
}

export default Title
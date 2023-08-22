import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from '@fortawesome/free-solid-svg-icons'

import './Title.css'

const Title = () => {
  return (
    <div className='title'>
        <div className='logo'>
          <FontAwesomeIcon icon={faComputer}  className='title-logo'/>
        </div>
        <p>
          Actively looking for a <span className='title-span'>Frontend developer</span> or <span className='title-span'>Technical Support</span> role.
        </p>
    </div>
  )
}

export default Title
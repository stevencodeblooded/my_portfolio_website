import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from '@fortawesome/free-solid-svg-icons'

const Title = () => {
  return (
    <div className='title'>
        <div className='logo'>
          <FontAwesomeIcon icon={faComputer}  className='title-logo'/>
        </div>
        <p>Actively looking for <span className='title-span'>Frontend developer</span> and <span className='title-span'>Technical Support</span> role.</p>
    </div>
  )
}

export default Title
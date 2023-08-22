import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'

import './SelfIntroduction.css'

const SelfIntroduction = () => {
  return (
    <div className='self-intro'>
        <h2>Welcome...<span><FontAwesomeIcon icon={faHandshake} className='welcome' /></span></h2>
        <h3>I'm</h3>
        <h1>Steven Ochieng</h1>
    </div>
  )
}

export default SelfIntroduction
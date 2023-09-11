import React from 'react'

import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <div>
            <h1>The Page was Not Found </h1>
            <Link to='/'>Back To Home</Link>
        </div>
    </div>
  )
}

export default NotFound
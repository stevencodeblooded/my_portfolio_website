import React from 'react'

import steve from '../../../assets/profile.png'

import './Goal.css'

const Goal = () => {
  return (
        <div className='goal'>
            <h1>
                <span className='color-1'>Taking actions to solve</span>
                    <br />
                <span className='color-2'>issues affecting our</span> 
                    <br />
                <span className='color-3'>digital space</span>
            </h1>

            <img src={steve} alt='profile' className='steve-profile'/>
        </div>
  )
}

export default Goal
import React from 'react'

import steve from '../../../assets/profile.png'

import './Goal.css'

const Goal = () => {
  return (
      <div className='goal-container'>
        <div className='goal'>
            <h1 data-aos='fade-right' data-aos-duration='2000'>
                <span className='color-1'>Taking actions to solve</span>
                    <br />
                <span className='color-2'>issues affecting our</span> 
                    <br />
                <span className='color-3'>digital space</span>
            </h1>

            <img 
                src={steve} 
                alt='profile' 
                className='steve-profile'
                data-aos='fade-left' 
                data-aos-duration='3000'
            />
        </div>
     </div>
  )
}

export default Goal
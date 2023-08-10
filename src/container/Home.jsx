import React from 'react'

import Navbar from '../components/Navbar'
import Title from '../components/Home/Title'
import Introduction from '../components/Home/Introduction'
import TextContent from '../components/Home/TextContent'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <div className='navbar-margin'>
          <Navbar />
        </div>
        <Title />
        <Introduction />
        <TextContent />
        <Footer />
    </div>
  )
}

export default Home
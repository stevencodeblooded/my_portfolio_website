import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Title from '../components/Home/Title/Title';
import TextContent from '../components/Home/TextContent/TextContent';
import Footer from "../container/Footer";
import SelfIntroduction from '../components/Home/SelfIntroduction/SelfIntroduction';
import Goal from '../components/Home/Goal/Goal';

const Home = () => {
  return (
    <div>
        <div className='navbar-margin'>
          <Navbar />
        </div>
        <div className='top-margin'>
          <Title />
          <SelfIntroduction />
          <TextContent />
          <Goal />
          <Footer />
        </div>
    </div>
  )
}

export default Home
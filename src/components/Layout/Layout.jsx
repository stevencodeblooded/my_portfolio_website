import React from 'react'

import './Layout.css'
import Footer from '../../container/Footer'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='layout-container'>
        <Navbar />
        <Outlet />
        <div className='footer-layout'>

        <Footer />
        </div>
    </div>
  )
}

export default Layout
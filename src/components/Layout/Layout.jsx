import React from 'react'

import './Layout.css'
import Footer from '../../container/Footer'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import {Outlet} from 'react-router-dom'
import ScrollButton from './components/ScrollButton';
const Layout = () => {
  return (
    <div className='Layout'>
        <Header />
        <Navbar />
        <Outlet />
        <ScrollButton />
        <Footer />
    </div>
  )
}

export default Layout
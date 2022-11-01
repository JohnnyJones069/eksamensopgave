import React from 'react'
import Header from '../Header';
import Navbar from '../Navbar';
import About from '../pages/About';

import Contact from '../pages/Contact';
import Footer from '../Footer';
const Layout = () => {
  return (
    <div className='Layout'>
        <Header />
        <Navbar />
        <main>
          {/* 
          <About / Contact / Hvad eksamen specialt indholder. />
          */}
        </main>
        <Footer />
    </div>
  )
}

export default Layout
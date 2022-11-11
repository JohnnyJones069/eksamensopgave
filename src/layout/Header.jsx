import React from 'react'
import logo from './assets/img/logo.png'
import { IoLocationSharp, IoTimeOutline } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Header = () => {
  return (
    <div className='Header'>
      <div className='Image'>
        <img src={ logo } />
      </div>
      <div className='headerabout'>
        <div className="location">
          <IoLocationSharp color='#ff6600ff' />
          <p>Strømparken 1, 8500 Grenaa.</p>
        </div>
        <div className="openTime">
          < IoTimeOutline color='#ff6600ff' />
          <p>Man - Søn 9:00 - 18:00</p>
        </div>
        <div className="number">
          <BsFillTelephoneFill color='#ff6600ff' />
          <p>[45] 86 45 45 78</p>
        </div>
      </div>
    </div>
  )
}

export default Header
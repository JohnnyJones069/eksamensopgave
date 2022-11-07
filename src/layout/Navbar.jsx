import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Logout from '../admin/components/Logout';
import SearchInput from './components/SearchImput';
import { LoginContext } from '../admin/context/LoginContext'

const Navbar = () => {

  // Hent "user" - for at se om der er logget ind
  const { user, } = useContext( LoginContext );

  const [showMenu, setShowMenu] = useState(false)



  return (
    <nav className='Navbar'>

      {/* Burgermenu */ }
      <div className={showMenu == true ? "burger-button open" : "burger-button"} onClick={() => setShowMenu(!showMenu)}>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>

      <div className={showMenu === true ? "navbar-container active" : "navbar-container"}>
        <ul>
          {/* end tilføjet for at ungå at Home er .aktiv konstant */ }
          <li><NavLink to="/" end>FORSIDE</NavLink></li>
          <li><NavLink to="omos">OM OS</NavLink></li>
          <li><NavLink to="service">SERVICE</NavLink></li>
          <li><NavLink to="faq">FAQ</NavLink></li>
          <li><NavLink to="nyheder">NYHEDER</NavLink></li>
          <li><NavLink to="kontakt">KONTAKT OS</NavLink></li>
          <SearchInput />
          {
            //  Hvis der er en bruger i "global state/context"
            user ?
            <>
                <li><NavLink to="admin">ADMIN</NavLink></li>
                <li><Logout /></li>
              </>
              :
              <>
                <li><NavLink to="login">Login</NavLink></li>
              </>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
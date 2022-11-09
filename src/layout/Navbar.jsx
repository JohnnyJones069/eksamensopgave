import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Logout from '../admin/components/Logout';
import SearchInput from './components/SearchImput';
import { LoginContext } from '../admin/context/LoginContext'
import { BiWinkSmile } from 'react-icons/bi';
import { useEffect } from 'react';

const Navbar = () => {

  // Hent "user" - for at se om der er logget ind
  const { user, } = useContext( LoginContext );
  const [showMenu, setShowMenu] = useState(false)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 75);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <nav className={`${sticky ? "sticky Navbar" : "Navbar"}`}>

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
          <li><NavLink to="kontaktos">KONTAKT OS</NavLink></li>
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
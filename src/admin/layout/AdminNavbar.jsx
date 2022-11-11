import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Logout from '../components/Logout';
// import { LoginContext } from '../../context/LoginContext';

const AdminNavbar = () => {

  // Hent "user" - for at se om der er logget ind
  const [ showMenu, setShowMenu ] = useState( false )

  return (
    <nav className="Admin-navbar">

      {/* Burgermenu */ }
      <div className="burger-button" onClick={ () => setShowMenu( !showMenu ) }>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>

      <div className={ showMenu === true ? "admin-navbar-container active" : "admin-navbar-container" }>
        <ul>
          {/* end tilføjet for at ungå at Home er .aktiv konstant */ }
          <li><NavLink to="/admin" end>Admin Home</NavLink></li>
          <li><NavLink to="admintours">Admin Tours</NavLink></li>
          <li><NavLink to="adminabout">Admin About</NavLink></li>
          <li><NavLink to="admincontact">Admin Contact</NavLink></li>
          <li><NavLink to="adminfooter">Admin Footer</NavLink></li>
          <li><NavLink to="/" end>Public Home</NavLink></li>
          <li><Logout className="logout" /></li>
        </ul>
      </div>
    </nav>
  )
}

export default AdminNavbar
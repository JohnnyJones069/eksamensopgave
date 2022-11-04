import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import Logout from '../components/Logout';
// import { LoginContext } from '../../context/LoginContext';


const AdminNavbar = () => {

  // Hent signOut/Logud metoden
  // const { signOut } = useContext( LoginContext );


  return (
    <nav className='AdminNavbar'>
      <ul>
        {/* end tilføjet for at ungå at Home er .aktiv konstant */ }
        <li><NavLink to="/admin" end>Admin Home</NavLink></li>
        <li><NavLink to="admintours">Admin Tours</NavLink></li>
        <li><NavLink to="adminabout">Admin About</NavLink></li>
        <li><NavLink to="admincontact">Admin Contact</NavLink></li>
        <li><NavLink to="adminfooter">Admin Footer</NavLink></li>
        <li><NavLink to="/" end>Public Home</NavLink></li>
      </ul>
        <span className='logout'><Logout /></span>
    </nav>
  )
}

export default AdminNavbar
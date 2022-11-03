import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import {LoginContext} from '../context/LoginContext'

const AdminLayout = () => {

  const {user} = useContext( LoginContext )

  // Hvis der IKKE er en user (i Context = ikke logget ind)
  if (!user){
    return<Navigate to="/login" replace />
  }

  return (
    <div className='AdminLayout'>

      <div className='Admin-container'>
        <AdminNavbar />

        <Outlet />
      </div>


    </div>
  )
}

export default AdminLayout
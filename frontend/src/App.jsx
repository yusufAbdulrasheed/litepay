import { useState } from 'react'
import './index.css'
import {Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import Login from './page/Login'
import Dashboard from './page/Dashboard'
import AdminHome from './page/admin/AdminHome'
import AdminDashboard from './page/admin/AdminDashboard'

function App() {
 
  return (
    <>
      
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/admin/home' element={< AdminHome/>} />
        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
      </Routes>
      
    </>
  )
}

export default App

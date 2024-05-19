import React from 'react'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'
import Tile from '../../assets/Abstract_Background_02-09.jpg'


const AdminHome = () =>{
  return(
    <>
      <div className='bg-cover min-h-screen' style={{background: `url(${Tile})`}}>
        <NavBar/>
        <Hero/>
      </div>
 
    </>
  )
}

export default AdminHome
import React from 'react'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import AboutGrid from '../components/AboutGrid'
import NavBar from '../components/NavBar'
import Tile from '../assets/Abstract_Background_02-09.jpg'

const Home = () =>{
  return(
    <>
      <div class='bg-cover min-h-screen' style={{background: `url(${Tile})`}}>
        <NavBar/>
        < Hero/>
        <hr className='my-8 border-gray-300 '></hr>
        <Feature/>
        <hr className='my-8 border-gray-300 '></hr>
        <AboutGrid/>
        <hr className='my-8 border-gray-300 '></hr>
      </div>
    
    </>
  )
}

export default Home
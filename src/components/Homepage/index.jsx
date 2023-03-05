import React from 'react'
import "./Homepage.scss"
import TopCarousel from './components/TopCarousel'
import CircleCarousel from './components/CircleCarousel'
import bg from "../../assets/home-bg.png"
const Homepage = () => {
  return (
   <div className='home-container'>
    <TopCarousel/>
   </div>
  )
}

export default Homepage
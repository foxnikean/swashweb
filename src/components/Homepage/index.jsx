import React from 'react'
import "./Homepage.scss"
import TopCarousel from './components/TopCarousel'
import CircleCarousel from './components/CircleCarousel'
import bg from "../../assets/home-bg.png"
import BottomCarousel from './components/BottomCarousel'
import BottomEvents from './components/BottomEvents'
const Homepage = () => {
  return (
   <div className='home-container'>
    <TopCarousel/>
    <BottomCarousel/>
    <BottomEvents/>
   </div>
  )
}

export default Homepage
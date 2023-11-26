import React from 'react'
import Navbar from '../Components/navbar'
import CarouselPage from '../Components/carousel'
import Delivery from '../Components/Delivery'
import Card from '../Components/card'
import MultiCard from '../Components/MultiCard'
import TrandingOutfit from '../Components/trandingOutfit'
import Footer  from '../Components/Footer/index'

function Home() {
  return (
    <div>
      <Navbar/>
      <CarouselPage/>
      <Delivery/>
      <Card/>
      <MultiCard/>
      <TrandingOutfit/>
      <Footer/>
    </div>
  )
}

export default Home

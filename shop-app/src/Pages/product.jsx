import React from 'react'
import Navbar from '../Components/navbar';
import Footer from '../Components/Footer/index';
import Card from '../Components/card';


export default function Product() {
  return (
    <div>
        <Navbar/>
        <Card limit={null} pagetitle="All Products"/>
        <Footer/>
    </div>
  )
}

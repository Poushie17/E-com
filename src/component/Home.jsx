import { useState } from 'react'

import '../index.css'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Category from '../component/Category'
import Values from '../component/Values'
import Products from '../component/Products'
import Discount from '../component/Discount'
import Process from '../component/Process'
import Testimonials from '../component/Testimonials.Jsx'
import Footer from '../component/Footer'



function Home(){
  return (
    
      <div className=''>
        
        <Hero/>
        <Category/>
        <Values/>
        <Products/>
        <Discount/>
        <Process/>
        <Testimonials/>
        
        
     </div>
  )

}
export default Home

import React from 'react'
import grocery from '../assets/grocery.png'
import Button from './Button'


function Hero() {
  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col  items-center min-h-screen md:pt-25 pt-35 '>
            <div>
                <span className='bg-green-100 text-green-700 text-lg px-5 py-2 rounded-full'> Quality is Prior...</span>
                <h1 className='md:text-7xl/20 text-5xl/14 mt-4 font-bold'>Organic <span className='text-green-700'>Fruits</span> and <span className='text-green-700'>Vegetables</span> <br></br>at your Doorstep</h1>
                <p className='text-gray-700  md:text-lg text-md max-w-[530] mt-5 mb-10'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.
</p>
            <Button content="Shop Now"/>
            </div>

            <div>
                <img src={grocery} alt="hero img" />
            </div>
        </div>
    </section>
  )
}

export default Hero
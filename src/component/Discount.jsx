import React from 'react'
import Button from './Button'
import FruitsSet from '../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-gray-50 bg-no-repeat bg-right  bg-contain' style={{backgroundImage:`url(${FruitsSet}) `}}>
        <div className='max-w-[1400px] md:bg-transparent bg-gray-50 flex md:flex-row flex-col py-10 mx-auto px-10'>
            <span className=' md:text-9xl text-6xl text-green-500 font-bold transform md:-rotate-90 h-fit md:self-center '>20%</span>
            <div className='max-w-[700px]'>
                <h3 className='md:text-7xl text-4xl  text-gray-900 font-bold'>First order discount!</h3>
                <p className='text-gray-600 my-6 '>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
                <Button content='Get A Discount'/>            
            </div>
        </div>
        
    </section>
  )
}

export default Discount
import React from 'react'
import Button from './Button'
import Heading from './Heading'
import fruits_veg_cat from '../assets/fruits-and-veggies.png'
import dairy_eggs_cat from '../assets/dairy-and-eggs.png'
import meat_seafood_cat from '../assets/meat-and-seafood.png'
import { Link } from 'react-router-dom'
const Category = () => {
  const rendercards = category.map(card => {
    return (
      <div className='flex-1 basis-[300px] ' key={card.id} >
        <div className='w-full min-h-[30vh] relative -mb-10'>
          <img src={card.image} className='absolute bottom-0' alt="" />
        </div>
        {/* card contet */}
        <div className='bg-green-100 pt-17 p-8 rounded-xl '>
          <h3 className='text-green-900 font-bold text-3xl'>{card.title}</h3>
          <p className='text-green-700 mt-3 mb-9'>{card.des}</p>
          <Link to={card.path} className='bg-linear-to-b from-green-500 to-green-700 text-white px-8 py-3 rounded-lg md:text-lg  text-md hover:scale-105 hover:to-green-600 transition-all duration-300 cursor-pointer'>See All</Link>
        </div>
      </div>
    )
  }
  )
  return (

    <div className='max-w-[1400px] mx-auto px-10  py-20'>
      <Heading green="Shop" black="By Category" />
      {/* category Cards */}
      <div className='flex flex-wrap gap-10 md:mt-15 mt-10'>{rendercards}</div>

    </div>
  )
}

export default Category

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    des: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: fruits_veg_cat,
    path: '/fruits'
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    des: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: dairy_eggs_cat,
    path:'/dairy'
  },
  {
    id: 3,
    title: "Meat & Seafood",
    des: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: meat_seafood_cat,
    path:'/seafood'
  }
];

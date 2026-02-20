import React from 'react'

const Button =(props)=> {
  return (
 
        <button className='bg-linear-to-b from-green-500 to-green-700 text-white px-8 py-3 rounded-lg md:text-lg  text-md hover:scale-105 hover:to-green-600 transition-all duration-300 cursor-pointer'>
            {props.content}
        </button>

  )
}

export default Button
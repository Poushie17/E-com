import React from 'react'

function Heading(props) {
  return (
    
         <div className='py-20'>
        <div className='mx-auto w-fit'>
        <h2 className=' md:text-5xl text-3xl font-bold'>
            <span className='text-green-500'>{props.green}</span> {props.black}
        </h2>
        <div className='w-34 md:mt-6 ml-auto h-1 mt-3  bg-green-300'></div>
        </div>
   
    </div>
  )
}

export default Heading
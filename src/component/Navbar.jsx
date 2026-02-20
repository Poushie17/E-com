import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";


const Navbar =()=> {
    const [showMenu,setShowMenu]=useState(false);
    const [isScroll,setscroll]=useState(false);
    const toggleMenu =()=>{
        setShowMenu(!showMenu);
    }
    useEffect(()=>{
        const handleScroll=()=>{
            setscroll(window.scrollY>10)
        }

        window.addEventListener('scroll',handleScroll)
        return ()=> window.removeEventListener('scroll',handleScroll)
    })
    return (
        <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScroll?'shadow-lg':''}`}>
            <nav className='max-w-350 md:h-[14vh] h-[12vh] flex justify-between  mx-auto items-center px-10 pt-6'>
                <a href='#' className='text-3xl font-bold'>
                    Grocer<span className='text-green-700 uppercase'>D</span>oor

                </a>

                {/* Desktop menu */}
                <ul className='md:flex  items-center gap-x-15 hidden' >
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-green-700'   > Home</a>
                    </li>

                    <li>
                        <a href="#" className='font-semibold tracking-wider text-black hover:text-green-700'>About Us</a>
                    </li>

                    <li>
                        <a href="#" className='font-semibold tracking-wider text-black hover:text-green-700'> Process</a>
                    </li>
                    <li>

                        <a href="#" className='font-semibold tracking-wider text-black hover:text-green-700'>Contact Us</a>
                    </li>
                </ul>

                {/* Nav action */}
                <div className='flex items-center gap-x-5 '>
                    <div className='md:flex p-1 border-2 border-green-700 rounded-full hidden'>
                        <input type="text" name='text' id='text' placeholder='search...' autoComplete="off" 
                         className='flex-1 h-[5vh] px-3 focus:outline-none '/>
                        <button className='bg-green-700 text-white w-10 h-10  flex justify-center items-center rounded-full text-xl bg-linear-to-b from-green-500 to-green-700 '>
                            <FaSearch/>
                        </button>
                    </div>
                    <a href='#'className='text-2xl'> 

                       <FaShoppingCart/> </a>
                     <a href='#'className='text-2xl'> 
                        <FaHeart/>
                        
                         </a>
                       {/* Hamburger */}
                       <a href='#' className='text-black text-3xl md:hidden ' onClick={toggleMenu}>
                        {showMenu?<CiMenuFries/> : <CiMenuBurger/>}
                        
                       </a>
                   
                </div>

                {/* mobile */}

                <ul className={`flex flex-col gap-y-12 bg-green-100 shadow-xl backdrop:blur-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2  transition-all duration-500 ${showMenu? 'left-1/2': ""}`}>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-green-700'   > Home</a>
                    </li>

                    <li>
                        <a href="#" className='font-semibold tracking-wider text-black hover:text-green-700'>About Us</a>
                    </li>

                    <li>
                        <a href="#" className='font-semibold tracking-wider text-black hover:text-green-700'> Process</a>
                    </li>
                    <li>

                        <a href="#" className='font-semibold tracking-wider text-black hover:text-green-700'>Contact Us</a>
                    </li>

                     
                    <li className='flex  p-1 border-2 border-green-700 rounded-full md:hidden'>
                        <input type="text" name='text' id='text' placeholder='search...' autoComplete="off" 
                         className='flex-1 h-[5vh] px-3 focus:outline-none '/>
                        <button className='bg-green-700 text-white w-10 h-10  flex justify-center items-center rounded-full text-xl bg-linear-to-b from-green-500 to-green-700 '>
                            <FaSearch/>
                        </button>
                    </li>
                </ul>

            </nav>
        </header>

    )
}

export default Navbar
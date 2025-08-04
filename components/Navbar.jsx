import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar h-[80px] w-full justify-between bg-gray-300 flex items-center'>
        <Link to="/"><h1 className='text-[25px] font-medium ml-[50px] text-gray-800'>QuiqResume</h1></Link>
        <Link to="/about"><h1 className='text-[25px] font-medium mr-[50px] text-gray-800'>About</h1></Link>
    </nav>
  )
}

export default Navbar
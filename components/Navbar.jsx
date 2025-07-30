import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar h-[80px] w-full justify-between bg-gray-400 flex items-center'>
        <Link to="/"><h1 className='text-[28px] font-medium ml-[140px] text-white'>QuiqResume</h1></Link>
        <Link to="/about"><h1 className='text-[28px] font-medium mr-[120px] text-white'>About</h1></Link>
    </nav>
  )
}

export default Navbar
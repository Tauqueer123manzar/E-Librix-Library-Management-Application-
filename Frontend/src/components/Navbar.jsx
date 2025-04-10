import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 const closeMenu=()=>{
  setIsMenuOpen(false);
 }
  return (
    <>
      <nav className='bg-white shadow-xl  fixed top-0 left-0 right-0'>
        <div className='container mx-auto p-4 flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-blue-500'>E Librix</h1>

          {/* ==================================== Humberger menu for mobile screen only ======================================= */}
          <div className='md:hidden'>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
            </button>
          </div>

          {/* =================================== Navigation Links ===================================== */}
          <ul className='hidden md:flex space-x-6 text-lg text-gray-800'>
            <li><Link to="/" className='hover:text-blue-500'>Home</Link></li>
            <li><Link to="/about" className='hover:text-blue-500'>About</Link></li>
            <li><Link to="/service" className='hover:text-blue-500'>Service</Link></li>
            <li><Link to="/contact" className='hover:text-blue-500'>Contact</Link></li>
          </ul>
          {/* ===================================== Loggin button visible only desktop =================================== */}
          <div className='hidden md:block'>
            <Link to='/login'>
              <button className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-black hover:text-white cursor-pointer'>
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* =================================== Navigation Links for mobile screen only ===================================== */}
        {
          isMenuOpen && (
            <div className='md:hidden text-lg p-4 absolute w-100 max-h-screen left-0 z-16 text-center bg-white'>
              <ul className='flex flex-col text-center space-y-4 z-10'>
                <li><Link to="/" className='hover:text-blue-500' onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" className='hover:text-blue-500' onClick={closeMenu}>About</Link></li>
                <li><Link to="/service" className='hover:text-blue-500' onClick={closeMenu}>Service</Link></li>
                <li><Link to="/contact" className='hover:text-blue-500' onClick={closeMenu}>Contact</Link></li>
                <Link to='/login'>
                  <button className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-black hover:text-white cursor-pointer' onClick={closeMenu}>
                    Login
                  </button>
                </Link>
              </ul>
            </div>
          )
        }
      </nav>
    </>
  )
}

export default Navbar

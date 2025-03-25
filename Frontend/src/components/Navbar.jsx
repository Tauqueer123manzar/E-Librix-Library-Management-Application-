import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
const Navbar = () => {
  const[isMenuOpen,setIsMenuOpen]=useState(false);
  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen);
  };
  return (
  <>
   <nav className='bg-white shadow-xl  fixed top-0 left-0 right-0'>
    <div className='container mx-auto p-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-blue-500'>E Librix</h1>

   {/* ==================================== Humberger menu for mobile screen only ======================================= */}
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          {isMenuOpen? <FaTimes className='text-2xl'/>:<FaBars className='text-2xl'/>}
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
      <button className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-black hover:text-white cursor-pointer hidden md:block' href='/login'>Login</button>
    </div>

    {/* =================================== Navigation Links for mobile screen only ===================================== */}
    {
      isMenuOpen &&(
       <div className='md:hidden text-lg bg-white p-4 absolute w-full left-0 top-16 z-5 text-center'>
        <ul className='flex flex-col space-y-4 text-center'>
         <li><Link to="/" className='hover:text-blue-500'>Home</Link></li>
         <li><Link to="/about" className='hover:text-blue-500'>About</Link></li>
         <li><Link to="/service" className='hover:text-blue-500'>Service</Link></li>
         <li><Link to="/contact" className='hover:text-blue-500'>Contact</Link></li>
         <li><button className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-black hover:text-white cursor-pointer' href='/login'>Login</button></li>
        </ul>
       </div>
      )
    }
   </nav>
  </>
  )
}

export default Navbar

import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-10'>
      <div className='container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8'>
     
      {/* Left Section - Library Info */}
      <div className='md:text-left'>
         <h2 className='text-xl font-blod flex items-center gap-2'>
         <span className='text-3xl'>🌍</span>E Librix
         </h2>
         <p className='mt-3 text-gray-400'>E Librix Library is your ultimate destination for digital knowledge. we provide seamless access to thousands of books, research papers, and academic resources.</p>
      </div>

      {/* Middle Section - Quick Links */}
      <div className='md:text-left'>
         <h2 className='text-xl font-bold'>Quick Links</h2>
         <ul className='mt-3 space-y-2'>
            <li><a href='/' className='text-gray-400 hover:text-white'>Home</a></li>
            <li><a href='/about' className='text-gray-400 hover:text-white'>About</a></li>
            <li><a href='/service' className='text-gray-400 hover:text-white'>Service</a></li>
            <li><a href='/contact' className='text-gray-400 hover:text-white'>Contact</a></li>
            <li><a href='/signup' className='text-gray-400 hover:text-white'>Signup</a></li>
         </ul>
      </div>

      {/* Right Section - Useful Links */}
      <div className="md:text-left">
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">☑️ Customer Service</a></li>
            <li><a href="#" className="hover:text-white">☑️ Help Desk</a></li>
            <li><a href="#" className="hover:text-white">☑️ Forum</a></li>
            <li><a href="#" className="hover:text-white">☑️ Staff Profile</a></li>
            <li><a href="#" className="hover:text-white">☑️ Live Chat</a></li>
          </ul>
        </div>

        
      {/* Right Section - Contact Info */}
      <div className='md:text-left'>
       <h2 className='text-xl font-bold'>Contact Us</h2>
        <ul className='mt-3 space-y-2'>
           <li className='flex items-center gap-2'>
              <span className='text-gray-400'><MdEmail style={{color:"red"}}/></span>
              <a href='mdtauqueermanzar@gmail.com' className='text-gray-400 hover:text-white'>mdtauqueermanzar@gmail.com</a>
            </li>
            <li className='mt-3 flex items-center gap-2'>
              <span className='text-gray-400'><FaPhoneAlt style={{color:"white"}}/></span>
              <a href='tel:+917549200441' className='text-gray-400 hover:text-white'>+917549200441</a>
            </li>
            <li className='mt-3 flex items-center gap-2'>
             <span className='text-gray-400'><FaAddressCard style={{color:"yellowgreen"}}/></span>
             <a href='https://www.google.com/maps/dir//Maulana+Azad+National+Urdu+University+Urdu+University+Road+Near+LNT+Towers,+Telecom+Nagar,+Gachibowli+Hyderabad,+Telangana+500032/@17.4267823,78.3613264,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb93f5ada6d80f:0x6d6400aee08b61a1!2m2!1d78.3634275!2d17.4253117?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D' className='text-gray-400 hover:text-gray-white'> Gachibowli Hyderabad</a>
            </li>
            <li className='mt-3 flex items-center gap-2'>
             <span className='text-gray-400'><FaLinkedin style={{color:"blueviolet"}}/></span>
             <a href='https://www.linkedin.com/in/md-tauqueer-manzar-268408233/' className='text-gray-400 hover:text-white'>Linkedln</a>
            </li>
        </ul>
      </div>
      </div>
    </footer>
  )
}

export default Footer

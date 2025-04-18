import React from 'react'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
const Login= () => {
  return (
    <>
        <div className='mx-auto bg-gradient-to-r from-blue-200 via-blue-300 to-indigo-400 h-screen flex flex-col p-5'>
           <p className='text-2xl  text-white mt-30 text-center' style={{fontFamily:"initial"}}>Welcome Back! Log in to Your Account</p>
           <div className='flex flex-col bg-white w-full md:w-1/3 h-[430px] md:h-[400px] mx-auto mt-10 shadow-2xl px-10 rounded-xl'>
            <h2 className='text-center text-black text-2xl mt-4'>User Login</h2>
             <input 
              type='text'
              placeholder='Enter Email'
              className='border border-gray-300 rounded-md p-3 w-full mt-10 '
              />
              <input
              type='password'
              placeholder='Enter Password'
              className='border border-gray-300 rounded-md p-3 w-full mt-3 mx-auto'
              />
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-7 mx-auto w-full cursor-pointer'>Login</button>
              <p className='text-center mt-7 gap-2 text-blue'>If you don't have an account then please Signup?  <Link to='/signup' className='text-blue-500 hover:text-blue-700 gap-4'>  Signup</Link></p>
           </div>
        </div>
        <div className=''>
            <Footer/>
        </div>
    </>
  )
}

export default Login

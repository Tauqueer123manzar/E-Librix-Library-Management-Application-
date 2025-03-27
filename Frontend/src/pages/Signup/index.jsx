import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
const Signup = () => {
    return (
        <>
            <div className='mx-auto bg-white h-screen flex flex-col m-5 p-4'>
                <h3 className='text-2xl  text-blue-500 mt-25 text-center' style={{ fontFamily: "initial" }}>Welcome! Signup to Your Account</h3>
                <div className='flex flex-col bg-white w-full md:w-1/3 h-[450px] md:h-1/2 mx-auto mt-10 shadow-2xl px-10 rounded-lg'>
                    <h2 className='text-center text-black text-2xl mt-4'>User Signup</h2>
                    <input
                        type='text'
                        placeholder='Enter Email'
                        className='border border-gray-300 rounded-md p-2 w-full mt-10 '
                    />
                    <input
                        type='password'
                        placeholder='Enter Password'
                        className='border border-gray-300 rounded-md p-2 w-full mt-5 mx-auto'
                    />
                    <input 
                       type='password'
                       placeholder='Confirm Password'
                       className='border border-gray-300 rounded-md p-2 w-full mt-5 mx-auto'
                       />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mx-auto w-full cursor-pointer'>Login</button>
                    <p className='text-center mt-5 gap-2 text-blue'>If you don't have an account then please Signup?  <Link to="/login" className='text-blue-500 hover:text-blue-700 gap-4'>Login</Link></p>
                </div>
            </div>
            <div className='mt-2'>
                <Footer />
            </div>
        </>
    )
}

export default Signup

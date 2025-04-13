import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Signup from './pages/Signup/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import Navbar from './components/Navbar';
import Testimonial from './pages/Testimonials/index';
const App = () => {
  return (
   <>
    <BrowserRouter>
     <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/testimonial' element={<Testimonial/>}/>
       <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App

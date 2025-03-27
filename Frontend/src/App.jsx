import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Signup from './pages/Signup/index';
import About from './pages/About/index';
import Navbar from './components/Navbar';
const App = () => {
  return (
   <>
    <BrowserRouter>
     <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Navbar from './components/Navbar';
const App = () => {
  return (
   <>
    <BrowserRouter>
     <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App

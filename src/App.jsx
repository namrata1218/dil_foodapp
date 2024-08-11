import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import { Route, Routes, useActionData } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/Placeorder/Placeorder';
import Footer from './components/Footer/Footer';
import Login from './components/LoginPopUP/Login';
const App = () => {

  const[showLogin, setShowLogin]=useState(false);
  return (
    <>
    {showLogin? <Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
       <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>


     
      </Routes>
      
        
    </div>
    <Footer/>
    </>
  )
}

export default App;

import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';
import Placeorder from './pages/Placeorder/Placeorder';
import Footer from './components/Footer/Footer';
import Login from './components/LoginPopUP/Login';
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [loginRedirect, setLoginRedirect] = useState(null);
  const navigate = useNavigate();

  const handleLoginSuccess = (name) => {
    setUserLoggedIn(true);
    setUserName(name || 'User');
    setShowLogin(false);
    if (loginRedirect) {
      navigate(loginRedirect);
      setLoginRedirect(null);
    }
  };

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} onLoginSuccess={handleLoginSuccess}/> : null}
      <div className='app'>
        <Navbar
          setShowLogin={setShowLogin}
          userLoggedIn={userLoggedIn}
          userName={userName}
          setLoginRedirect={setLoginRedirect}
        />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeorder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App;

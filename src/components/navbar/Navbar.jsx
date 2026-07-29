import React, { useContext, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { BsBasket } from "react-icons/bs";
import { GiHeartTower } from "react-icons/gi";
import "./Navbar.css";
import {Link, useNavigate} from "react-router-dom"
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin, userLoggedIn, userName, setLoginRedirect}) => {
  const [menu, setMenu]=useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const {getTotalCartAmount, favItems, searchTerm, setSearchTerm}=useContext(StoreContext);
  const navigate = useNavigate();
  const favCount = Object.keys(favItems).length;

  const handleCartClick = () => {
    if (userLoggedIn) {
      navigate('/cart');
      return;
    }
    setLoginRedirect('/cart');
    setShowLogin(true);
  };

  const handleSearchToggle = () => {
    setSearchOpen((prev) => !prev);
    if (searchOpen) {
      setSearchTerm('');
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (!searchOpen) {
      setSearchOpen(true);
    }
    if (value.trim() !== '') {
      navigate('/');
      setMenu('Menu');
      const menuSection = document.getElementById('explore-menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className='navbar'> 
      <Link to="/"><GiHeartTower  className='logo'/></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("Home")}className={menu==="Home"?"active":""}>Home</Link>
        <Link to='/favorites' onClick={()=>setMenu("Favorites")} className={menu==="Favorites"?"active":""}>Favorites</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")}className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#footer' onClick={()=>setMenu("Contact us")}className={menu==="Contact us"?"active":""}>Contact us</a>
      </ul> 
      <div className="navbar-right">
        <div className={`navbar-search ${searchOpen ? 'search-open' : ''}`}>
          <IoMdSearch onClick={handleSearchToggle} className="navbar-search-icon-button" />
          {searchOpen && (
            <input
              type="text"
              className="navbar-search-input"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search dishes..."
              autoFocus
            />
          )}
        </div>
        <button type="button" className="navbar-search-icon" onClick={handleCartClick}>
          <BsBasket />
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </button>
        {userLoggedIn ? (
          <div className="navbar-user">Hi, {userName}</div>
        ) : (
          <button onClick={()=>setShowLogin(true)}>sign in</button>
        )}
      </div>
    </div>
  )
}

export default Navbar

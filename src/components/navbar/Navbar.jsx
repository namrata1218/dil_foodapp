import React, { useContext, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { BsBasket } from "react-icons/bs";
import { GiHeartTower } from "react-icons/gi";
import "./Navbar.css";
import {Link} from "react-router-dom"
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {
const [menu, setMenu]=useState("home");
const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='navbar'> 
    <Link to="/"><GiHeartTower  className='logo'/></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("Home")}className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")}className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Mobile-app")}className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("Contact us")}className={menu==="Contact us"?"active":""}>Contact us</a>
        </ul> 
        <div className="navbar-right">
        <IoMdSearch />
<div className="navbar-search-icon">
<Link to="/cart"><BsBasket /></Link>
<div className={getTotalCartAmount()===0?"":"dot"}></div>

</div>
<button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    
    
    </div>
  )
}

export default Navbar

import React, {useState} from "react";
import './Navbar.css'
import {assets} from "../../assets/assets.js";

const Navbar = () => {

    const [menu, setMenu] = useState("Home")

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className="logo"/>
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
                <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
                <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt=""/>
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt=""/>
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
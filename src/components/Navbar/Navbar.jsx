import React, {useState} from "react";
import './Navbar.css'
import {assets} from "../../assets/assets.js";
import {Link} from "react-router-dom";

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Home")

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className="logo"/>
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("my-crafts")} className={menu==="my-crafts"?"active":""}>My Crafts</a>
                <a href='#app-download' onClick={()=>setMenu("App-Download")} className={menu==="App-Download"?"active":""}>App-Download</a>
                <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt=""/>
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt=""/>
                    <div className="dot"></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
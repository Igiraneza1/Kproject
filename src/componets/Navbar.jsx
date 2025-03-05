import React from "react";
import "../styles/navbar.css";
import icon from '../assets/imag-7.jpg'
import search_b from '../assets/search-b.png'
import search_w from '../assets/search-w.png'
import day from '../assets/day.png'
import night from '../assets/night.png'



    function Navbar(){
    return(
        <div className="container">
            
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <button><li>Register Now</li> </button>
            </ul>
            <div className="search-box">
                <input type="text" placeholder="Search" />
                <img src={night} alt="" className="toggle-icon" />
            </div>
            <img src="" alt=""  />

        </div>

            
    )
}
export default Navbar;
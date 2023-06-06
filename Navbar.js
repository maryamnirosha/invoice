import React from "react";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
//import "../index.css";

export default function Navbar (){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
       <header className="header">
        <p>DailyOfferDeals</p>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">Invoice</a>
            <a href="/#">Dashboard</a>
            <a href="/#">About Us</a>
            <button  className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
       </header>
    )
}

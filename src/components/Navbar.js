import React from 'react';
import earth from "../images/earth.jpeg"
import './Navbar.css'
export default function Navbar(){
    return (
        <nav className='navbar'>
            <img src={earth} className='navbar-img'/>
            <h3>My Travel Journal</h3>
        </nav>
    )
}
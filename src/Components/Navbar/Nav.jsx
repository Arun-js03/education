import React from 'react'
import './Nav.css'
import head_logo from "../../assets/FLogo.png";

function Nav() {
  return (
    <div className='container'>
        <div className='main-nav'>
        <div>
            <div className='head-flx'>
                <img src={head_logo} alt="" />
                <h2>Hharat Institute Of Teacher’s Education</h2>
            </div>
        </div>
        <div className='nav-flx'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Nav

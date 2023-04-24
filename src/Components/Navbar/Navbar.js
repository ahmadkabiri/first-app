import React from 'react'
import './Navbar.css'
import {BsBag} from 'react-icons/bs'
function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm py-3 d-flex'>
        <div className="container">
           <a href="#" className="navbar-brand">
            Sabzlearn Shop
            </a> 
            <ul className="navbar-nav me-auto-ms-3">
                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        Home
                    </a>
                </li>
            </ul>

            <div className="bag-box">
                <a href="#" className='bag'>
                    <BsBag className='text-white'></BsBag>
                    <span className='bag-products-counter'>0</span>
                </a>
            </div>
        </div>
        </nav>
  )
}

export default Navbar
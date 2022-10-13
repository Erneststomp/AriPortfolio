import React from 'react'
import  './NabBar.css'
import conejito from '../../Images/Conejo-Logo-.png'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
        <div className='Nav-Full container-fluid'>
            <div className='Nav-Blur'></div>
           <Link style={{ textDecoration: 'none' }}  to="/"> 
                <div className='Nav-Left'>
                    <img src={conejito} className='Conejo' alt=''></img>
                    <div className='Nav-Name'>Ariadna </div>
                    
                </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className=' collapse navbar-collapse Nav-Right' id="navbarNavAltMarkup">
                    <ul className=' navbar-nav ms-auto mb-2 mb-lg-0 Nav-List-Style Nav-List'>
                        <li className='nav-item ms-1'><Link style={{ textDecoration: 'none' }} className='Nav-Text' to="/">Home</Link></li>
                        <li className='nav-item ms-1'><Link style={{ textDecoration: 'none' }} className='Nav-Text' to="/Abilities">Abilities</Link></li>
                        <li className='nav-item ms-1'><Link style={{ textDecoration: 'none' }} className='Nav-Text' to="/Portfolio">Portfolio</Link></li>
                        <li className='nav-item ms-1'><Link style={{ textDecoration: 'none' }} className='Nav-Text' to="/AboutMe">About Me</Link></li>
                        <li className='nav-item ms-1'><Link style={{ textDecoration: 'none' }} className='Contact-Button' to="/Contact">Contact</Link></li>
                    </ul>
            </div>
        
        </div>
    </nav>
  )
}

export default NavBar
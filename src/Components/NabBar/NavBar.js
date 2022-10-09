import React from 'react'
import  './NabBar.css'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
        <div className='Nav-Full container-fluid'>
            <div className='Nav-Blur'></div>
            <div className='Nav-Left'>
                <div className='Nav-Name'>Ariadna</div>
                <span></span>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className=' collapse navbar-collapse Nav-Right' id="navbarNavAltMarkup">
                    <ul className=' navbar-nav ms-auto mb-2 mb-lg-0 Nav-List-Style Nav-List'>
                        <li className='nav-item ms-1'>Home</li>
                        <li className='nav-item ms-1'>Abilities</li>
                        <li className='nav-item ms-1'>Portfolio</li>
                        <li className='nav-item ms-1'>About Me</li>
                        <button className='Contact-Button nav-item ms-1'>
                            Contact
                        </button>
                    </ul>
            </div>
        
        </div>
    </nav>
  )
}

export default NavBar
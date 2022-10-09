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
                <div className='Nav-List'>
                    <ul className=' navbar-nav Nav-List-Style'>
                        <li className='nav-item'>Home</li>
                        <li className='nav-item'>Abilities</li>
                        <li className='nav-item'>Portfolio</li>
                        <li className='nav-item'>About Me</li>
                        <button className='Contact-Button'>
                            Contact
                        </button>
                    </ul>
                    
                </div>
            </div>
        
        </div>
    </nav>
  )
}

export default NavBar
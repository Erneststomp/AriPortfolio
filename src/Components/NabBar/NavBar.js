import React from 'react'
import  './NabBar.css'
const NavBar = () => {
  return (
    <div >
        <div className='Nav-Blur'></div>
        <nav className="navbar navbar-expand-sm navbar-dark  gradient-custom__nav" id="navbar">
            <div className="container-fluid">  
                <div className='Nav-Left'>
                    <div className='Nav-Name navbar-brand'>Ariadna</div>
                    <span></span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='Nav-Right collapse navbar-collapse Nav-List'  id='navbarToggleExternalContent'>
                    <ul className='navbar-nav Nav-List-Style'>
                        <li className=' nav-item'>Home</li>
                        <li className=' nav-item'>Abilities</li>
                        <li className=' nav-item'>Portfolio</li>
                        <li className=' nav-item'>About Me</li>   
                        <button className='Contact-Button' >
                            Contact
                        </button>     
                    </ul>
                    
                        
                </div>
                
            </div>  
        </nav>
    
    </div>

  )
}

export default NavBar
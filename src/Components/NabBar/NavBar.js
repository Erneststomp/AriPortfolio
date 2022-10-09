import React from 'react'
import  './NabBar.css'
const NavBar = () => {
  return (
    <div className='Nav-Full'>
        <div className='Nav-Blur'></div>
        <div className='Nav-Left'>
            <div className='Nav-Name'>Ariadna</div>
            <span></span>
        </div>
        <div className='Nav-Right'>
            <div className='Nav-List'>
                <ul className='Nav-List-Style'>
                    <li>Home</li>
                    <li>Abilities</li>
                    <li>Portfolio</li>
                    <li>About Me</li>
                    <button className='Contact-Button'>
                        Contact
                    </button>
                </ul>
                
            </div>
        </div>
    
    </div>

  )
}

export default NavBar
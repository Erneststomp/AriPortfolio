import React from 'react'
import foto from '../../Images/Ari.jpg'
import profile from '../../Images/Conejo-Logo.png'
import Resume from './Resume-Ariadna-Rojas.pdf'
import './Intro.css'


const Intro = () => {
  return (
    <div className='Main-div'>
      <div className='Blur' style={{background:' #bda1eb',top:'10%',width:'85%', height:'85%'}}></div>
      <div className='Card-wrap'>
        <div className='Card'>
          <img alt='' className='ProfilePictureFront' src={profile}></img>
        </div>
        <div className='Card'>
          <img alt='' className='ProfilePictureBack' src={foto}></img>
        </div>
      </div>
      <div className='Card-text'>
        <p className='Salute'>¡¡Hola!!</p>
        <p className='Presentation'>Soy Ariadna Rojas Palma</p>
        <p className='Introduction'>Diseñadora Grafica egresada de la Facultad de Arquitectura y Diseño de la UAEM.</p>
        <p className='Introduction'>Trabajo en equipo, excelente comunicación y una insaciable hambre de conocimiento me describen.</p>
        <a href={Resume} download>
          <button className='CV-Button'>Download CV</button>
        </a>
        
      </div>
     
    </div>
    
  )
}

export default Intro
import React from 'react'
import '../styles/home.css'
import imagenFondo from '../images/PapelFoldFinal.png'
import astronout from '../images/astronout.png'
export default function Home(props) {
  return (
    <div className="landing-page text-white bg-cover bg-center h-screen" style={{ backgroundImage: `url(${imagenFondo})` }}>
    <div className="astronauta-container relative">
      <img src={astronout} alt="astronauta" className="astronauta " />
    </div>
    
  </div>
  )
}

import React from 'react'
import '../styles/landingPage.css'
import imagenFondo from '../images/PapelFoldFinal.png'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function LandingPage(props) {
  return (
    <div className="landing-page text-white bg-cover bg-center h-screen" style={{ backgroundImage: `url(${imagenFondo})` }}>
      <div className="flex flex-col justify-center h-full">
        <header></header>
        <main className="py-10 text-center justify-center">
          <div className="title-container">
            <h1 className="text-6xl font-bold">Paper Folder</h1>
            <h2 className="text-3xl pt-5">Proyect A4 Size</h2>
            <h3 className="font-thin">by Ivan Szelect</h3>
          </div>
          <div className="pt-5 mx-auto text-center text-white lg:max-w-xl md:max-w-lg sm:max-w-sm">
            <h4 className="text-lg bg-gray-900/50 border-black-500 border-2 p-4">¿Sabías que si doblas 7 veces una hoja A4 tendrías el espesor de 1.28 cm de un cuaderno?<br/> No es posible doblar más que eso un papel, pero... <br/>¿y si fuera posible? <br/>Esta función devuelve las medidas y equivalencias de la cantidad de pliegues que reciba su hoja A4 de 0.1 milímetros.</h4>
          </div>
        </main>
          <footer className=''>
          <div className=" text-6xl flex justify-center gap-16 pu-3 text-gray-200">
            <a href="https://www.linkedin.com/in/szelect/" rel="noreferrer" target="_blank">
              <AiFillLinkedin className="hover:text-gray-700 dark:hover:text-gray-200" />
            </a>
            <a href="https://www.instagram.com/ivan_szelect" rel="noreferrer" target="_blank">
              <AiFillInstagram className="hover:text-gray-700  dark:hover:text-gray-200" />
            </a>
            <a href="https://github.com/ElSzelect" rel="noreferrer" target="_blank">
              <AiFillGithub className="hover:text-gray-700  dark:hover:text-gray-200" />
            </a>
          </div>

          </footer>
      </div>
      
    </div>
  );
} 
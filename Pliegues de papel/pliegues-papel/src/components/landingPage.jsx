import React from 'react'
import '../styles/landingPage.css'
import imagenFondo from '../images/PapelFoldFinal.png'
import astronout from '../images/astronout.png'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function LandingPage(props) {
  return (
    <div className="landing-page text-white bg-cover bg-center h-screen" style={{ backgroundImage: `url(${imagenFondo})` }}>
      <div className="flex flex-col justify-center h-full">
        <header></header>
        <main className="py-10 text-center justify-center">
          <div className="title-container">
            <h1 className="bg-black bg-opacity-25  text-6xl font-bold">Paper Folder</h1>
            <h2 className="text-3xl pt-5">Proyect A4 Size</h2>
            <h3 className="font-thin code">by Ivan Szelect</h3>
          </div>
          <div className="pt-5 mx-auto text-center text-white lg:max-w-xl md:max-w-lg sm:max-w-sm">
            <h4 className="text-lg bg-gray-900/50 border-black-500 border-2 p-4">Did you know that if you fold an A4 sheet 7 times, you would have the thickness of a notebook of 1.28 cm? <br></br>
It is not possible to fold more than that a paper, but...<br></br>
and if it were possible?<br/>
This function returns the measurements and equivalences of the number of folds that your A4 sheet of 0.1 millimeters receives.</h4>
          </div>
          <div className='py-20 '>
            <Link to='/home' className='bg-black  transition duration-300 text-slate-200 text-3xl rounded-full hover:bg-black hover:bg-opacity-85 bg-opacity-50 px-4 py-2 hover:text-white'>Let's Start</Link>
          </div>
        </main>
          <footer className=''>
          <div className=" text-6xl flex justify-center gap-16 pu-3 text-gray-200">
            <a href="https://www.linkedin.com/in/szelect/" rel="noreferrer" target="_blank">
              <AiFillLinkedin className="hover:text-gray-500 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/ivan_szelect" rel="noreferrer" target="_blank">
              <AiFillInstagram className="hover:text-gray-500 transition duration-300 " />
            </a>
            <a href="https://github.com/ElSzelect" rel="noreferrer" target="_blank">
              <AiFillGithub className="hover:text-gray-500 transition duration-300 " />
            </a>
          </div>

          </footer>
      </div>
      
    </div>
  );
} 
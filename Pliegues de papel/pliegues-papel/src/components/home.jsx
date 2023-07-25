import React, { useState } from 'react'
import '../styles/home.css'
import imagenFondo from '../images/PapelFoldFinal.png'
import astronout from '../images/astronout.png'
import calculaPlieguesHoja from '../controllers/PlieguesDePapel'

export default function Home(props) {

  
  
  const [foldsData, setFoldsData] = useState({
    folds: null,
})

  const submitHandler = async (e) => {
    e.preventDefault()
    const message = document.querySelector('#message')
    navigator.clipboard.writeText(JSON.stringify(foldsData.folds))
    message.innerHTML = 'DONE!'
    setTimeout(() => message.innerHTML = '', 1000)
    
  }

  const inputHandler = async (e) => {
    e.preventDefault()
    setFoldsData({
      folds: calculaPlieguesHoja(e.target.value)
    })
    
  }

  


  return (
    <main className="landing-page text-white bg-cover bg-center h-screen" style={{ backgroundImage: `url(${imagenFondo})` }}>
      <div className='flex flex-col justify-center h-full '>
        <div className="astronauta-container contents justify-self-center mb-[20vh]">
          <img src={astronout} alt="astronauta" className="astronauta h-auto max-w-sm filter:shadow-lg dark:shadow-black/30 " />
        </div>
        <form onSubmit={submitHandler} className='z-10 justify-center border-white/80 bg-slate-50/10 self-center h-1/2 w-1/2 flex flex-col items-center shadow-lg shadow-black/50' action="">
          <label>Number of Folds</label>
          <input onChange={inputHandler} className='folds selection:bg-transparent focus:outline-none text-black border-black border-2 font-medium h-10 w-[80%] my-4 shadow-lg shadow-black/50 text-center ' type='number' placeholder=' 1,2,3,4..'></input>
          <button className='border-black/25 border-2 p-2 text-black shadow-lg shadow-black/50 hover:bg-white active:bg-black/50 transition' type='submit'>Copy Resutls</button>
          <span id="message" className='text-black font-bold'></span>
          {foldsData.folds === null ?  null : <div className='z-10 self-center max-w-[50vw] bg-black/50 p-2 mt-2 content'><p>{`Number of Papers: ${foldsData.folds.CantidadHojas} Distance: ${foldsData.folds.Espesor} Unit: ${foldsData.folds.UnidadMedida}`}</p></div>}
        </form>
      </div>
    </main>
  )
}

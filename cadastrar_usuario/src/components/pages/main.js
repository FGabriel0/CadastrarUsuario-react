import React from 'react'
import './Main.css'
import Home from './Home'
import { FaHome } from 'react-icons/fa';

const main = () => {
  return(
    <>
     <Home icon={<FaHome/>} title="Inicio" subtitle="Cadastre aqui um usuário"/>
     <main className="content container-fluid">
      <div className='p-3 mt-3'>
        <div className='display-4'> 
            Bem-vindo!
        </div>       
        <p className='mb-0'>Sistema de Cadastro Utilizando React...</p>
        

      </div>
     </main>
    </>
  )
}


export default main
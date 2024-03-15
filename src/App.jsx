import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InicioSesion } from './componentes/InicioSesion';
import { Usuarios } from './componentes/Usuarios';
import { RegistroUsuarios } from './componentes/RegistroUsuarios';
//import { ReporteUsuario } from './componentes/ReporteUsuario';
import reactLogo from './assets/react.svg'

import './App.css'
import { ReporteUsuario } from './componentes/ReporteUsuario';

function App() {
  return (    
    <>     
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>twitter mak</h1>
      <div className="card">
        <p>          
          <code>Esto es un ejercicio de la clase Desarrollo de aplicaciones web 1 </code>
          <code>Ing. FERNANDO LOPEZ  by for Makdiel</code>
        </p>
      </div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<InicioSesion/>} />
          <Route path='/Usuarios' element = {<Usuarios/>} />
          <Route path='/RegistroUsuarios' element = {< RegistroUsuarios/>} />
          <Route path='/ReporteUsuarios' element={<ReporteUsuario/>} ></Route>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App

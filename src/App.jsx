import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InicioSesion } from './componentes/InicioSesion';
import { Usuarios } from './componentes/Usuarios';
import { RegistroUsuarios } from './componentes/RegistroUsuarios';
import { Muro } from './componentes/Muro';
import reactLogo from './assets/react.svg';
import './App.css';
import { ReporteUsuario } from './componentes/ReporteUsuario';
import { crearPublicacion } from './componentes/crearPublicacion';

function App() {
  return (    
    <>     
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>twitter mak</h1>   
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<InicioSesion/>} />
          <Route path='/Usuarios' element = {<Usuarios/>} />
          <Route path='/RegistroUsuarios' element = {< RegistroUsuarios/>} />
          <Route path='/ReporteUsuarios' element={<ReporteUsuario/>} ></Route>
          <Route path='/Muro' element={<Muro/>}></Route>
          <Route path='/crearPublicacion' element={<crearPublicacion/>}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App

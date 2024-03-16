import React from 'react'
import { ReporteUsuario } from './ReporteUsuario';
import { RegistroUsuarios } from './RegistroUsuarios';
import { crearPublicacion } from './crearPublicacion';

export const Usuarios = () => {
  return (
    <>
        <RegistroUsuarios/>
        <ReporteUsuario/>
        <crearPublicacion/>
    </>
  )
}

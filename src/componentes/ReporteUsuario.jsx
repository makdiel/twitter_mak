import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const urlBase = import.meta.env.MY_APP_URL;
const endPoint = urlBase+'/Usuarios';

export const ReporteUsuario = () => {

    const navigate = useNavigate()
    
    const [data, useData] = useState([]);

    const getDatos = async()=>{

        
        const result = await axios.get(endPoint);
        const resultData = (await result).data;
        useData(resultData);

    }

    const editarUsuario = (usuario)=>{

        const url = `/editarCrudUsuario/${usuario.nombre_usuario}`;
        console.log(url);

        navigate(url);
    }

    const borrarUsuario = async(nombre_usuario)=>{

        console.log(`Borrar ${nombre_usuario}`);

        const url = endPoint + `/${nombre_usuario}`;

        const result = await axios.delete(url);

        const resulData = (await result).data;

        console.log(resulData);

    }
    
    useEffect(()=>{

        getDatos();

    }, []);
    return (
    <>
        <h3>Reporte de Usuarios</h3>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Nombre Usuario</th>
                    <th>Correo</th>
                    <th>Contraseña</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Rol</th>
                    <th>Activo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                { data.map( (item)=>(  

                    <tr key={item.nombre_usuario}>
                        <td>{item.nombre_usuario}</td>
                        <td>{item.correo_electronico}</td>
                        <td>{item.contrasena}</td>
                        <td>{item.nombre}</td>
                        <td>{item.apellido}</td>
                        <td>{item.nombre_rol}</td>
                        <td>{ item.activo ? 'Si' : 'No' }</td>
                        <td> 
                            <button className='btn btn-danger' onClick={ ()=>{
                                borrarUsuario( item.nombre_usuario )
                            } }  >x</button> 
                            <button className='btn btn-warning'  onClick={ ()=>{
                                
                                editarUsuario(item);

                            } }    >e</button>
                        </td>

                    </tr>   

                ))  }
            </tbody>
        </table>
    </>
  )
}

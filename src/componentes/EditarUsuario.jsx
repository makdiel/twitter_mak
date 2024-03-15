import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

//const baseUrl = import.meta.env.MY_APP_URL;
const baseUrl = `http://localhost:4000/api`;

export const EditarUsuario = () => {

    const navigate =  useNavigate();

    const {nombre_usuario} = useParams();

    const [dataForm, setDataForm] = useState({
        correo_electronico: "",
        contrasena: "",
        nombre: "",
        activo: true,
        id_rol: 1
    });

    const getUsuarioModificar = async()=>{

        console.log("Funcion Get Usuario Modificar")

        const url = baseUrl + '/Usuarios/'+ nombre_usuario;
        const result = axios.get(url);
        const resulData = (await result).data;
        let tempUsuario = {
            correo_electronico: resulData[0].correo_electronico,
            contrasena:  resulData[0].contrasena,
            nombre:  resulData[0].nombre,           
            activo: resulData[0].activo,
            id_rol: resulData[0].id_rol
        }

        setDataForm(tempUsuario);

    }   

    useEffect(()=>{
        
        getUsuarioModificar()

    } ,[]);

    const handlerChange = (event) => {

        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });

    }

    const handlerSubmit = async () => {

        event.preventDefault();
        
        console.log("Entre al Handler");
        const url = baseUrl + '/Usuarios/' + nombre_usuario;

        const result = await axios.put(url, dataForm);

        const resultData = (await result).data;
        console.log(resultData);

        navigate('/Usuarios')
    }

    return (
        <>
            <div className='container mt-5' >
                <form onSubmit={handlerSubmit} >
                    <fieldset>
                        <legend>Administración de Usuarios</legend>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Usuario</label>
                            <div className="col-sm-10">
                                <input type='text' className="form-control-plaintext"
                                    name="nombre_usuario"
                                    value={nombre_usuario}
                                    onChange={handlerChange}
                                    disabled={true}
                                    />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Correo</label>
                            <div className="col-sm-10">
                                <input type='email' className="form-control-plaintext"
                                    name="correo_electronico"
                                    value={dataForm.correo_electronico}
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">contrasena</label>
                            <div className="col-sm-10">
                                <input type='password' className="form-control-plaintext"
                                    name="contrasena"
                                    value={dataForm.contrasena}
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-10">
                                <input type='text' className="form-control-plaintext"
                                    name="nombre" 
                                    value={dataForm.nombre}
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>                       

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Activo</label>
                            <div className="col-sm-10">
                                <select className="form-select"
                                    name="activo" onChange={handlerChange}
                                    
                                >

                                    <option value={true}  >Si</option>
                                    <option value={false}>No</option>

                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Rol</label>
                            <div className="col-sm-10">
                                <select className="form-select"
                                    name="id_rol" onChange={handlerChange}
                                >

                                    <option value={1}>Admin</option>
                                    <option value={2}>Cliente</option>

                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Actualizar Usuario</button>
                    </fieldset>
                </form>
            </div>

        </>
    )

}

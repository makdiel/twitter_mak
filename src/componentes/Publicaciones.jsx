import { useEffect, useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

export const Publicaciones = () => {
    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        id: "",
        publicacion: "",
        nombre_usuario: ""

    });

    const handlerChange = (event) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });
    }

    const onInicio = async () => {
        navigate('/Muro');
    }


    const handlerSubmit = async () => {
        event.preventDefault();
        //const url = baseUrl + '/Usuarios';
        const url = `http://localhost:4000/api/publicacion`;

        try {

           // const datosFormulario = new FormData();
           // datosFormulario.append("id", form.id);
           // datosFormulario.append("nombre_usuario", form.nombre_usuario);
           // datosFormulario.append("publicacion", form.publicacion);

            const result = await axios.post(url, dataForm);
            //const result = await axios.get(url);
            const resultData = (await result).data;
            navigate(`/Muro`);
            console.log(resultData);
        } catch (err) {
            console.log("Error al registrar publicacion");
        }
    }

    return (
        <>
            <h3>PUBLICACIONES</h3>
            <div className='container mt-5' >
                <form onSubmit={handlerSubmit} >

                    <fieldset>
                        <legend>ingresar nuevas Publicaciones</legend>
                        <div className="input-group mb-3">                            
                            <div className="col-sm-12">
                                <input type='text' className="form-control" placeholder="usuario"
                                    name="nombre_usuario"
                                    onChange={handlerChange} />
                            </div>
                        </div>
                        <div className="input-group mb-3">                           
                            <div className="col-sm-12">
                                <input type='text' className="form-control" placeholder="Publicacion"
                                    name="publicacion"
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>
                        <div className="input-group mb-3">                           
                            <div className="col-sm-8">
                                <input type='text' className="form-control" placeholder="#-Publicacion"
                                    name="id"
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Crear Publicacion</button>
                        <button type="submit" className="btn btn-primary w-100" onClick={onInicio}>Regresar</button>

                    </fieldset>
                </form>
            </div>
        </>

    )

}
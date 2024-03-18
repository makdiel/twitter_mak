import { useEffect, useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

export const Comentario = () => {
    const navigate = useNavigate();
    const {publicacion_id} = useParams();

    const [dataForm, setDataForm] = useState({
        id: "",
        comentario: "",
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
        const url = `http://localhost:4000/api/comentario/${publicacion_id}`;

        try {

            const result = await axios.post(url, dataForm);
            //const result = await axios.get(url);
            const resultData = (await result).data;
            navigate(`/Muro`);
            console.log(resultData);
        } catch (err) {
            console.log("Error al registrar comentario");
        }
    }

    return (
        <>
            <h3>COMENTARIOS</h3>
            <div className='container mt-5' >
                <form onSubmit={handlerSubmit} >

                    <fieldset>
                        <legend>ingresar un nuevo comentario</legend>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">id</label>
                            <div className="col-sm-10">
                                <input type='text' className="form-control-plaintext"
                                    name="id"
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Usuario:</label>
                            <div className="col-sm-10">
                                <input type='text' className="form-control-plaintext"
                                    name="nombre_usuario"
                                    onChange={handlerChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Comentario:</label>
                            <div className="col-sm-10">
                                <input type='text' className="form-control-plaintext"
                                    name="comentario"
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">id-Publicacion</label>
                            <div className="col-sm-10">
                                <input type='text' className="form-control-plaintext"
                                    name="publicacion_id"
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>
                       
                        <button type="submit" className="btn btn-primary w-100">Crear comentario</button>
                        <button type="submit" className="btn btn-primary w-100" onClick={onInicio}>Regresar</button>

                    </fieldset>
                </form>
            </div>
        </>

    )

}
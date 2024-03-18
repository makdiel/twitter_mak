import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Comentarios = () => {
    const navigate = useNavigate();
    //const {publicacion_id} = useParams();
    const [dataForm, setDataForm] = useState({
        id: "",
        comentario: "",
        nombre_usuario: "",
        publicacion_id: ""

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
        const url = `http://localhost:4000/api/comentario`;

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
                        <div className="input-group mb-3">
                            <div className="col-sm-8">
                                <input type='text' className="form-control" placeholder="id-comentario" aria-label="id-comentario" aria-describedby="basic-addon1"
                                    name="id"
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <div className="col-sm-8">
                                <input type='text' className="form-control" placeholder="usuario" aria-label="nombre_usuario"
                                    name="nombre_usuario"
                                    onChange={handlerChange} />
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <div className="col-sm-12">
                                <input type='text' className="form-control" placeholder="Comentario"
                                    name="comentario"
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <div className="col-sm-12">
                                <input type='text' className="form-control" placeholder="#-Publicacion"
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
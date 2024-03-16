import { useEffect, useState } from "react"
import axios from "axios";
import {useParams, useNavigate } from "react-router-dom";
import moment from 'moment';

export const Muro = () => {
    //const {nombre_usuario} = useParams();

    const [dataMuro, setDataMuro] = useState([]);
    const navigate = useNavigate();
    const [contadorDeBorrar, setContadorDeBorrar] = useState(0);

    const getDatos = async () => {
        const url = "http://localhost:4000/api/publicacion";
        const response = await axios.get(url);
        const datos = (await response).data;
        console.log(datos);
        setDataMuro(datos);
    }

    const borraPublicacion = async (idPost) => {
        const url = `http://localhost:4000/api/publicacion/${idPost}`;
        const response = await axios.delete(url);
        const datos = (await response).data;

        setContadorDeBorrar(contadorDeBorrar + 1);
        console.log(contadorDeBorrar);
    }

    const borraComentario = async (idPost) => {
        const url = `http://localhost:4000/api/comentario/${idPost}`;
        const response = await axios.delete(url);
        const datos = (await response).data;

        setContadorDeBorrar(contadorDeBorrar + 1);
        console.log(contadorDeBorrar);
    }

    const editarPublicacion = (idPublcacion) => {
        navigate(`/editarPost/${idPublcacion}`);
    }

    const crearPostHandler = () => {
        navigate('/crearPost');
    }
    const iniciotHandler = () => {
        navigate('/');
    }

    // siempre se ejecuta cada vez que se renderiza el componente
    useEffect(() => {
        getDatos();

    }, [contadorDeBorrar]);

    return (
        <>
            <div className="container">
                <button onClick={crearPostHandler} className="btn btn-primary  w-100" type="button" >
                    Crear Post
                </button>
                <button onClick={iniciotHandler} className="btn btn-primary  w-100" type="button" >
                    Volver al inicio
                </button>
                {
                    dataMuro.map((item) => (
                        <>
                        <div  key={item.id} className="card mt-2">
                            <div className="card-header mb-2">
                                <label for="date">Fecha Post:  {moment(item.fecha_post).format('DD/MM/YYYY')}</label>
                               <p>Post # {item.id} Posteado  por: {item.nombre_usuario}</p>
                               <button onClick={() => borraPublicacion(item.id)} className="btn btn-danger mx-2">Borrar Publicacion</button>
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>Publicaciones: <br></br>{item.publicacion} </p>
                                    <footer className="blockquote-footer">Posteado Por: {item.user} / {item.id_c}  <br></br> Posteado el: {moment(item.post_com).format('DD/MM/YYYY')}  <cite title="Source Title"> <br></br> Comentario: <br></br> {item.comentario}</cite></footer>
                                    <button onClick={() => borraComentario(item.id_c)} className="btn btn-danger mx-2">Borrar Comentario</button>                                 
                                </blockquote>
                            </div>

                        </div>
                      </>
                    ))
                }
            </div>
        </>
    )
}

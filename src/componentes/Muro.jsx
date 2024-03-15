import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Muro = () => {
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

    const editarPublicacion = (idPublcacion) => {
        navigate(`/editarPost/${idPublcacion}`);
    }

    const crearPostHandler = () => {
        navigate('/crearPost');
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
                {
                    dataMuro.map((item) => (
                        <>
                        <div  key={item.id} className="card">
                            <div className="card-header">
                                 {item.nombre_usuario}
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>{item.publicacion} </p>
                                    <footer className="blockquote-footer">Comentarios: {item.user} <cite title="Source Title">{item.comentario}</cite></footer>
                                    <button onClick={() => borraPublicacion(item.id)} className="btn btn-danger mx-2">Borrar</button>
                                    <button onClick={() => editarPublicacion(item.id)} className="btn btn-warning mx-2">Editar</button>
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

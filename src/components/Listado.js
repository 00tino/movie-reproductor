import React, { useEffect, useState } from 'react'
import { Editar } from './Editar.js'

export const Listado = ({listadoState, setListadoState}) => {

    // const [listadoState, setListadoState] = useState([]);

    const [editar,setEditar] = useState(0);

    useEffect( () => {
        console.log("componentes del listado de peli")
        conseguirPeliculas();
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);

        return peliculas;
    }

    const borrarPeli = (id) =>  {
        // conseguir pelicular almacenadas
        let pelis_almacenadas = conseguirPeliculas();

        // filtrar peliculas para eliminarla del array
        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

        // actualizar el estado del listado
        setListadoState(nuevo_array_pelis);

        // actualizar los datos en el locas storage
        localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
    }

    return (
        <>
            {listadoState != null ? 
                listadoState.map(peli => {
                    return(
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>

                            <button className="edit" onClick={ () => setEditar(peli.id) }>Editar</button>
                            <button className="delete" onClick={ () => borrarPeli(peli.id) }>Borrar</button>

                            {/* aparece formulario para editar */}
                        {editar === peli.id && (
                            <Editar peli={peli}
                                    conseguirPeliculas={conseguirPeliculas}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState}
                            />
                        )}

                        </article>
                    );

                })
                : <h2>No hay peliculas disponibles</h2>
            }
        </>
    )
}

import React, { useState } from 'react';
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Agregar pelicula";
    const [ peliState, setPeliState ] = useState({
        titulo: "",
        descripcion: "",
    });

    const { titulo, descripcion } = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        // conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        // creae objeto de la pelicula
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion,
        };

        // guardar estado
        setPeliState(peli);
 
        // actualizar el estado del listado principal
        setListadoState(elementos => {
            return [...elementos, peli];
        });
        
        // guardar en el almacenamiento local
        GuardarEnStorage("pelis", peli);
    }


    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            <b>
                {(titulo && descripcion) && "Has creado la pelicula: "+titulo}
            </b>

            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                       id="titulo"
                       name="titulo"
                       placeholder="Titulo"
                />
                <textarea id="descripcion"
                          name="descripcion"
                          placeholder="Descripcion">

                </textarea>
                <input type="submit"
                        value="Guardar" 
                />

            </form>
        </div>)
}

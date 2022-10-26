import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

    const [busqueda, setBusqueda] = useState('');
    const [noEncontrado, setNoEncontrado] = useState(false);

    const buscarPeli = (e) => {
        // crear estado y actualizar
        setBusqueda(e.target.value);

        // filtrar y buscar conincidencias
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
        })

        if(busqueda.length <= 1 || pelis_encontradas <= 0){
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
            setNoEncontrado(true);
        } else {
            setNoEncontrado(false)
        }

        // actualizar el estado del estado principal con lo filtrado
        setListadoState(pelis_encontradas);
        
    }

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {(noEncontrado == true && busqueda.length > 3) && (
                <span className="no-encontrado">No se a encontrado ninguna coincidencia</span>
            )}
            <form>
                <input type="text"
                       id="search_field"
                       name="busqueda"
                       autoComplete='off'
                       onChange={buscarPeli}
                 />
                <button id="search">Buscar</button>
            </form>
        </div>
    )
}

import { Listado } from "./components/Listado"
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { useState } from "react";

function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/* cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis Pelis</h1>
      </header>

      {/* nav */}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/* contenido principal */}
      <section id="content" className="content">

        {/* aca van las pelis */}
        <Listado listadoState={listadoState} setListadoState={setListadoState} />

      </section>

      {/* barra lateral */}
      <aside className="lateral">

        <Buscador listadoState={listadoState} setListadoState={setListadoState} />

        <Crear setListadoState={setListadoState}/>

      </aside>

      {/* footer */}
      <footer className="footer">
        &copy; Master en JavaScript ES12 y TypeScript
      </footer>


    </div>
  );
}

export default App;

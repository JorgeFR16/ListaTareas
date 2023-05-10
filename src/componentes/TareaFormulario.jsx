import React, { useState } from "react";
import "../hojas-de-estilo/TareaFormulario.css";
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva);  //esta linea es la que envia los props para listaDeTareas
  };

  return (
    <form action="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        type="text"
        className="tarea-input"
        placeholder="Escibe una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;

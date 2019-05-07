import React from 'react';

function EstructuraPresentacion(props) {
  return (
    <div className="estructuraPresentacion">
      <h1 className="Titulo-principal">{props.tituloP}</h1>
      <h2 className="Subtitulo">{props.subtitulo}</h2>
      <p className="Informacion">{props.información}</p>
    </div>
  );
}
function Presentacion() {
  return (
    <EstructuraPresentacion
      tituloP="REACT"
      subtitulo="Composición en React"
      información="Este es mi segundo ejercicio de composición en react, donde asígne las etiquetas que requeria para qué esto funcionara y le di valores, con la estructura que monte."
    />
  );
}
function showPresentacion() {
  return <Presentacion />;
}
export default showPresentacion;

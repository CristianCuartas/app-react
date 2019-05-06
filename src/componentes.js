import React from 'react';

const Welcome = props => {
  return <h1>Hola, {props.nombre}</h1>;
};

function elmt() {
  const element = <Welcome nombre="Cristian" />;
  return <div>{element}</div>;
}

export default elmt;

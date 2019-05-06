import React from 'react';

const jsx = () => {
  const nombre = 'Cristian Hernandez';
  const elemento = <h1>Hola {nombre}</h1>;
  return (
    <div>
      <p>{elemento}</p>
    </div>
  );
};

export default jsx;

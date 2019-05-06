import React, { Component } from 'react';

function SaludoUsuario(props) {
  return <h1>Bienvenido de nuevo!</h1>;
}
function SaludoHuesped(props) {
  return <h1>Inicia sesión</h1>;
}

function Saludar(props) {
  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return <SaludoUsuario />;
  }
  return <SaludoHuesped />;
}

function any() {
  return <Saludar isLoggedIn={true} />;
}
export default any;

import React, { Component } from 'react';

function Entrar(props) {
  return <button onClick={props.onClick}>Ingresar</button>;
}
function Salir(props) {
  return <button onClick={props.onClick}>Salir</button>;
}

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
// El componete que se creara a continución va a rendirizar las dos funciones que ya tenemos.
class Ingresos extends Component {
  constructor(props) {
    super(props);
    this.handleEntrarClick = this.handleEntrarClick.bind(this);
    this.handleSalirClick = this.handleSalirClick.bind(this);
    this.state = {
      isLoggedIn: false
    };
  }

  handleEntrarClick() {
    this.setState({ isLoggedIn: true });
  }

  handleSalirClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;
    let button;
    if (isLoggedIn) {
      button = <Salir onClick={this.handleSalirClick} />;
    } else {
      button = <Entrar onClick={this.handleEntrarClick} />;
    }

    return (
      <div>
        <Saludar isLoggedIn={isLoggedIn} />
        {button} <br /> <br />
        El usuario <b>{isLoggedIn ? 'si' : 'no'}</b> inicio sesión.
      </div>
    );
  }
}

export default Ingresos;

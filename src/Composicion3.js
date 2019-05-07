import React, { Component } from 'react';

function FancyBorder(props) {
  return (
    <div className={`FancyBorder FancyBorder-${props.color}`}>
      {props.children}
    </div>
  );
}
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <h2 className="Estructura-subtitulo">{props.subtitulo}</h2>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}
class SignUpDialog extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  render() {
    return (
      <Dialog
        title="Prueba"
        message="Prueba"
        subtitulo="Ejercicio de composición"
      >
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Unete</button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Hola, ${this.state.login}!`);
  }
}

export default SignUpDialog;

import React, { Component } from 'react';

function Anuncio(props) {
  if (!props.warn) {
    return null;
  }
  return <div className="Peligro">¡P E L I G R O!</div>;
}
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { mostrarAnuncio: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      mostrarAnuncio: !state.mostrarAnuncio
    }));
  }

  render() {
    return (
      <div>
        <Anuncio warn={this.state.mostrarAnuncio} />
        <button onClick={this.handleToggleClick}>
          {this.state.mostrarAnuncio ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>
    );
  }
}
export default Page;

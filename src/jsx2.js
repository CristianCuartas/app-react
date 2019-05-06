import React, { Component } from 'react';

class Nombre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primerNombre: 'Cristian',
      segundoNombre: 'David',
      primerApellido: 'Cuartas',
      segundoApellido: 'Hernandez'
    };
  }

  union = (pNombre, sNombre, pApellido, sApellido) => {
    return <div>{`${pNombre} ${sNombre} ${pApellido} ${sApellido}`}</div>;
  };

  render() {
    console.log(this.state.primerNombre);
    console.log(this.state.segundoNombre);
    console.log(this.state.primerApellido);
    console.log(this.state.segundoApellido);
    const {
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido
    } = this.state;

    return (
      <div>
        {this.union(
          primerNombre,
          segundoNombre,
          primerApellido,
          segundoApellido
        )}
      </div>
    );
  }
}

export default Nombre;

import React, { Component } from 'react';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cristian'
    };
  }

  componentDidMount() {
    console.log('Este es el component did mount');
  }

  componentWillMount() {
    console.log('Probando el will miunt');
  }

  render() {
    console.log('Render');
    return (
      <div>
        <p>Hola mundo </p>
      </div>
    );
  }
}

export default Example;

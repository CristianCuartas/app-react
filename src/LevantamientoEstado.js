import React, { Component } from 'react';

function BoilingVerdict(props) {
  if (props.celcius >= 100) {
    return <p>El agua herviría.</p>;
  }
  return <p>El agua no herviría.</p>;
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const { temperature } = this.state;
    return (
      <fieldset>
        <legend>Ingrese la temperatura en grados Celcius:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celcius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
export default Calculator;

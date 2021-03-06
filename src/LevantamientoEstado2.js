import React, { Component } from 'react';

const ScaleNames = {
  c: 'Celcius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature } = this.props;
    const { scale } = this.props;
    return (
      <fieldset>
        <legend>Ingrese la temperatura en {ScaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '', scale: 'c' };
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelciusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const { scale } = this.state;
    const { temperature } = this.state;
    const celcius =
      scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celcius}
          onTemperatureChange={this.handleCelciusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celcius={parseFloat(celcius)} />
      </div>
    );
  }
}
function BoilingVerdict(props) {
  if (props.celcius >= 100) {
    return <p>El agua herviría.</p>;
  }
  return <p>El agua no herviría.</p>;
}
function toCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
export default Calculator;

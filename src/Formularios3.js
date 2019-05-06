import React, { Component } from 'react';

class SaboresForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(`Tu sabor favorito es: ${this.state.value}`);
    event.preventDefautl();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Elige tu sabor favorito:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapeFruit">GrapeFruit</option>
            <option value="coconut">Coconut</option>
            <option value="lime">Lime</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default SaboresForm;

import React, { Component } from "react";
import Textc from "./Textc";

class Selectc extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <select onChange={this.handleOnChange}>
          <option>Ira</option>
          <option>Artem</option>
          <option>Antoshka</option>
        </select>
        <Textc value={this.state.value} />
      </div>
    );
  }
}

export default Selectc;

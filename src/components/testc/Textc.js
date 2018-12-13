import React, { Component } from "react";

class Textc extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", prevProps: { value: "" } };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    console.log(props);
    console.log(state);

    let cstate = { value: "" };

    console.log(
      `PrevPropsValue: ${state.prevProps.value} -  PropsValue: ${props.value}`
    );

    if (state.prevProps.value !== props.value) {
      cstate = { value: props.value };
      state.prevProps = { value: props.value };
    } else {
      cstate = { value: state.value };
    }

    return cstate;
  }

  handleOnClick(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  handleOnChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleOnClick}>Alert</button>
      </div>
    );
  }
}

export default Textc;

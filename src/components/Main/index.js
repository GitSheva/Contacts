import React, { Component } from "react";
import ContactTable3 from "../ContactTable3";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log("Main did mount");

    fetch("https://nodejs-contacts-service.azurewebsites.net/api/contacts")
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json
        });
      });
  }

  render() {
    return (
      <div>
        <ContactTable3 rows={this.state.data} />
      </div>
    );
  }
}

export default Main;

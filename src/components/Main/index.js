import React, { Component } from "react";
import EnhancedTable from "../ContactTable";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
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
        <EnhancedTable />
      </div>
    );
  }
}

export default Main;

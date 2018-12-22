import React, { Component } from "react";
import ContactTable from "../ContactTable2";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: [
        {
          name: "Id",
          options: {
            display: "excluded"
          }
        },
        "Name",
        "Email",
        "Phone",
        "Website",
        "Actions"
      ]
    };
  }

  handleOnClick = () => {
    console.log("click");
  };

  componentDidMount() {
    fetch("https://nodejs-contacts-service.azurewebsites.net/api/contacts")
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json.map(item => [
            item._id,
            item.name,
            item.email,
            item.phone,
            item.website,
            <IconButton onClick={this.handleOnClick}>
              <EditIcon />
            </IconButton>
          ])
        });
      });
  }
  render() {
    return (
      <div>
        <ContactTable data={this.state.data} columns={this.state.columns} />
      </div>
    );
  }
}

export default Main;

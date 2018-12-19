import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class AddContact extends Component {
  state = {
    user: {
      name: '',
      email: '',
      phone: '',
      website: ''
    }
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.user.name);
    event.preventDefault();
  }

  render() {
    const {
      user: { name, email, phone, website }
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <br />
        <TextField
          label="Email"
          value={email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <br />
        <TextField
          label="Phone"
          value={phone}
          onChange={this.handleChange('phone')}
          margin="normal"
        />
        <br />
        <TextField
          label="Website"
          value={website}
          onChange={this.handleChange('website')}
          margin="normal"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddContact;

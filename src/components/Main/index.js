import React, { Component } from 'react';
import EnhancedTable from '../ContactTable';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json
        });
      });
  }
  render() {
    return (
      <div>
        <EnhancedTable items={this.state.items} />
      </div>
    );
  }
}

export default Main;

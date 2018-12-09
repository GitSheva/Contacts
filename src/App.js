import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import AddContact from "./components/AddContact";
import Main from "./components/Main";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/AddContact" component={AddContact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "../logo.svg";
import "../styles/App.css";
import LinkList from "./LinkList";
import CreateLink from "./CreateLink";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header />
          <h2>Welcome to Osifo's React-Apollo Entry App</h2>
        </div>
        <div className="App-main">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

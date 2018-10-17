import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import MainDisplay from "../MainDisplay/MainDisplay"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainDisplay />
      </div>
    );
  }
}

export default App;

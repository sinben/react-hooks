import React, { Component } from 'react';
import './App.css';
//import WelcomeToComponent from "./components/WelcomeToComponentClass";
//import WelcomeToComponent from "./components/WelcomeToComponentFunction";
import WelcomeToComponent from "./components/WelcomeToComponentFunction";

import Kilder from "./components/Kilder";

class App extends Component {
  render() {
    return (
        <div class="App">
        <WelcomeToComponent title={"faglunsj 🍔"}/>
        <Kilder/>
        </div>
    );
  }
}

export default App;

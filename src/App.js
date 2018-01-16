import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          <h2>Sign up for updates on the next great board game</h2>
          <h1>Contagion</h1>
          <form action="mailto:mail@tablebossgames.com" method="post" enctype="text/plain">
            Name:
            <input type="text" name="name"></input><br />
            Email:
            <input type="text" name="mail"></input><br />
            <input type="submit" value="Send"></input>
            <input type="reset" value="Reset"></input>
          </form>
        </p>
      </div>
    );
  }
}

export default App;

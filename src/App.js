import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </Jumbotron>
        <Grid>
          <p className="App-intro">
            <h2>Sign up for updates on the next great board game</h2>
            <h1 className="Game-title">Contagion</h1>
            <form action="mailto:mail@tablebossgames.com" method="post" enctype="text/plain">
              <input type="text" name="name" placeholder="Name"></input><br />
              <input type="text" name="mail" placeholder="Email"></input><br />
              <input type="submit" value="Send"></input>
            </form>
          </p>
        </Grid>
      </div>
    );
  }
}

export default App;

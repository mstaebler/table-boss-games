import React, { Component } from 'react';
import { Grid, Jumbotron, Well, Panel } from 'react-bootstrap';
import logo from './logo.svg';
import blockConcept from './block-concept.jpg';
import hulkConcept from './hulk-concept.jpg';
import policeConcept from './police-concept.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron style={{'background':'black'}}>
            <img src={logo} alt="logo" />
        </Jumbotron>
        <Grid>
          <h1 className="Game-title">Contagion</h1>
          <Panel>
            <h2>Concept Art</h2>
            <img src={blockConcept} alt="block-concept" height="250" width="250" />
            <img src={hulkConcept} alt="block-concept" height="250" width="250" />
            <img src={policeConcept} alt="block-concept" height="250" width="250" />
          </Panel>
          <Well>
            <p>
              <h2>Subscribe to Table Boss Games' Newsletter</h2>
              <p>Receive announcements and updates on our upcoming table top adventure!</p>
              <form action="https://formspree.io/subscribe@tablebossgames.com"
                method="POST">
                <input type="email" placeholder="Email" name="_replyto" />
                <input type="submit" value="Subscribe" />
              </form>
              <p>We respect your <a href="">privacy</a>.</p>
            </p>
          </Well>
        </Grid>
      </div>
    );
  }
}

export default App;

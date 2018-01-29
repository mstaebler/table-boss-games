import React, { Component } from 'react';
import { Grid, Jumbotron, Well, Panel, Navbar, Nav, NavItem } from 'react-bootstrap';
import banner from './banner.jpg';
//import logo from './logo.svg';
import blockConcept from './block-concept.jpg';
import hulkConcept from './hulk-concept.jpg';
import policeConcept from './police-concept.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/contact">
              Contact
            </NavItem>
            <NavItem eventKey={3} href="/about">
              About
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://www.facebook.com/TableBossGames/">
              Facebook
            </NavItem>
            <NavItem eventKey={2} href="https://www.instagram.com/tablebossgames/">
              Instagram
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Jumbotron>
            <img src={banner} alt="banner" />
        </Jumbotron>
        <Grid>
          <h1 className="Game-title">Extraction</h1>
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
        <p style={{"textAlign":"center"}}>© 2018 Table Boss Games</p>
      </div>
    );
  }
}

export default App;

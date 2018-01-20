import React, { Component } from 'react';
import { Grid, Jumbotron, Well, FormControl, FormGroup, Button, Panel } from 'react-bootstrap';
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
              <form>
                <FormGroup
                  controlId="formBasicText"
                  //validationState={this.getValidationState()}
                >
                  <FormControl
                    style={{'width':'30%', 'textAlign':'center', 'display':'inline-block'}}
                    type="text"
                    //value={this.state.value}
                    placeholder="Email"
                    //onChange={this.handleChange}
                  />
                  <Button type="submit">Submit</Button>
                  <FormControl.Feedback />
                </FormGroup>
                
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

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jot from './components/Jot';
// import { Button } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      jotInfo: {
        message: 'I am jot info',
      }
    };
  }

  render() {
    //jshint ignore:start
    return (
      <div className="App">

        <header>
          I am the header
        </header>

        <main className="container" >
          <div className="row">
            <div className="col-md">
              <Jot

              />
              <Jot

              />
              <Jot

              />
              <Jot

              />
            </div>
            <div className="col-md">
              <Jot

              />
              <Jot

              />
            </div>
            <div className="col-md">
              <Jot

              />
              <Jot

              />
              <Jot

              />
            </div>
          </div>

        </main>

        <footer>
          <p>
            Created with React <img src={logo} className="App-logo" alt="logo" height="70" width="70"/>
          </p>
        </footer>
      </div>
    );
    //jshint ignore:end
  }
}

export default App;



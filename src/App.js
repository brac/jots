import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    //jshint ignore:start
    return (
      <div className="App">

        <header>
          I am the header
        </header>

        <body>
          <Jot
            time={this.state.date.toLocaleTimeString()}
          />
        </body>

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

function Jot(props) {

  //jshint ignore:start
  return (
    <div>
      <h1> Hello There</h1>
      <h2>It is {props.time}</h2>
    </div>
  );
  //jshint ignore:end
}

export default App;



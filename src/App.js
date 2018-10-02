import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
//jshint ignore:start
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Boom muthafucka
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
//jshint ignore:end
}

export default App;

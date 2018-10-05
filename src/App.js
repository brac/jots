import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jot from './components/Jot';
// import { Button } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      jots: [
        {
          topic: 'Install Git',
          id: 1,
          data: [
            'Install git on macOS with Homebrew',
            '$ brew install git'
          ]
        },
        {
          topic: 'CONFIGURATION',
          id: 2,
          data: [
            'Sets the name you want attached to your commit transaction',
            '$ git config --global user.name [name]'
          ]
        }
      ]
    };
  }

  render() {
    const {jots} = this.state;
    //jshint ignore:start
    return (
      <div className="App">

        <header>
          A Git Cheat Sheet
        </header>

        <main className="container-fluid">
          <ul className="jot-board row">
            {
              jots.map(jot => {
                return (
                  <li key="{jot.id}" className="jot-listitem">
                    <Jot
                      topic={jot.topic}
                      description={jot.data[0]}
                      command={jot.data[1]}
                      data={jot.data}
                    />
                  </li>
                )
              })
            }


          </ul>
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



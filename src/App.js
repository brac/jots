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
          data: [
            'Install git on macOS with Homebrew',
            '$ brew install git'
          ]
        }
      ]
    };
  }

  render() {
    //jshint ignore:start
    return (
      <div className="App">

        <header>
          A Git Cheat Sheet
        </header>

        <main className="container-fluid">
          <div className="jot-board row">
            <Jot
              topic={this.state.jots[0].topic}
              description={this.state.jots[0].data[0]}
              command={this.state.jots[0].data[1]}
            />
            <Jot
              topic={this.state.jots[0].topic}
              description={this.state.jots[0].data[0]}
              command={this.state.jots[0].data[1]}
            />
            <Jot
              topic={this.state.jots[0].topic}
              description={this.state.jots[0].data[0]}
              command={this.state.jots[0].data[1]}
            />
            <Jot
              topic={this.state.jots[0].topic}
              description={this.state.jots[0].data[0]}
              command={this.state.jots[0].data[1]}
            />
            <Jot
              topic={this.state.jots[0].topic}
              description={this.state.jots[0].data[0]}
              command={this.state.jots[0].data[1]}
            />
            <Jot
              topic={this.state.jots[0].topic}
              description={this.state.jots[0].data[0]}
              command={this.state.jots[0].data[1]}
            />
            <Jot
              topic={this.state.jots[0].topic}
              description={this.state.jots[0].data[0]}
              command={this.state.jots[0].data[1]}
            />
            <Jot
              topic={this.state.jots[0].topic}
              description={this.state.jots[0].data[0]}
              command={this.state.jots[0].data[1]}
            />
            <Jot
              topic={this.state.jots[0].topic}
              description={this.state.jots[0].data[0]}
              command={this.state.jots[0].data[1]}
            />
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



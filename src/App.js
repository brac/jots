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
            [
              'Install git on macOS with Homebrew',
              '$ brew install git'
            ],
            [
              'Install git on Debian-based linux',
              '$ sudo apt-get install git'
            ],
            [
              'Install git on Windows with CHocolatey',
              '$ choco install git'
            ],
          ],
        },
        {
          topic: 'CONFIGURATION',
          id: 2,
          data: [
            [
              'Sets the name you want attached to your commit transaction',
              '$ git config --global user.name [name]'
            ],
            [
              'Sets the email you want atached to your commit transactions',
              '$ git config --global user.email [email address]'
            ],
            [
              'Enables helpful colorization of command line output',
              '$ git config --global user.ui auto'
            ]
          ],

        },
        {
          topic: 'CREATE REPOSITORIES',
          id: 3,
          data: [
            [
              'Creates a new local repository with the specified name',
              '$ git init [project-name]'
            ],
            [
              'Downloads a project and its entire version history',
              '$ git clone [url]'
            ]
          ],
        },
        {
          topic: 'MAKE CHANGES',
          id: 4,
          data: [
            [
              'Lists all new or omdified files to be commited',
              '$ git status'
            ],
            [
              'Shows file differences not yet staged',
              '$ git diff'
            ],
            [
              'Add the specified file to the staging area',
              '$ git add [file]'
            ],
            [
              'Shows file differences between staging and the last file version',
              '$ git add --staged'
            ],
            [
              'Unstages the file, but preserve its contents',
              '$ git reset [file]'
            ],
            [
              'Records staged snapshots in version history',
              '$ git commit -m [descriptive message]'
            ]
          ],

        },
        {
          topic: 'BRANCES',
          id: 5,
          data: [
            [
              'Lists all local branches in the current repository',
              '$ git branch'
            ],
            [
              'Creates a branch',
              '$ git branch [branch-name]'
            ],
            [
              'Add the specified file to the staging area',
              '$ git add [file]'
            ],
            [
              'Shows file differences between staging and the last file version',
              '$ git add --staged'
            ],
            [
              'Unstages the file, but preserve its contents',
              '$ git reset [file]'
            ],
            [
              'Records staged snapshots in version history',
              '$ git commit -m [descriptive message]'
            ]
          ],

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



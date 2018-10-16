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
          topic: 'INSTALL GIT',
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
          topic: 'BRANCHES',
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
              'Merges the specified branches history into the current branch',
              '$ git merge [branch-name]'
            ],
            [
              'Switches to the specified branch',
              '$ git checkout [branch-name]'
            ],
            [
              'Creates a branch and switch to it',
              '$ git checkout -b [branch-name]'
            ],
            [
              'Rename a branch',
              '$ git checkout -m [new-branch-name]'
            ],
            [
              'Deletes the specified branch, locally',
              '$ git branch -d [branch-name]'
            ],
          ],
        },
        {
          topic: 'MOVING AND REMOVING FILES',
          id: 6,
          data: [
            [
              'Deletes the file from the working directory and stages the deletion',
              '$ git rm [file]'
            ],
            [
              'Removes the file from version control but repserves the file locally',
              '$ git rm --cached [file]'
            ],
            [
              'Renames the file',
              '$ git mv [from] [to]'
            ],
          ],
        },
        {
          topic: 'STASHING',
          id: 7,
          data: [
            [
              'Temporarily stores all modified tracked files',
              '$ git stash'
            ],
            [
              'Restores the most last stashed files and deletes the stashed changeset',
              '$ git stash pop'
            ],
            [
              'Lists all the stashed changesets',
              '$ git stash list'
            ],
            [
              'Deletes the last stashed changeset',
              '$ git stash drop'
            ],
          ],
        },
        {
          topic: 'HISTORY AND DIFF',
          id: 8,
          data: [
            [
              'Lists version history for the current branch',
              '$ git log'
            ],
            [
              'Lists version history for a file including renames',
              '$ git log --follow [file]'
            ],
            [
              'Shows content differences between two branches',
              '$ git diff [first-branch]...[second-branch]'
            ],
            [
              'Shows changes of the specified commit',
              '$ git show [commit]'
            ],
          ],
        },
        {
          topic: 'CANCEL AND REDO',
          id: 9,
          data: [
            [
              'Undoes all commits after [commit], preserving changes locally',
              '$ git reset [commit]'
            ],
            [
              'Discards all history and changes back to the specified commit',
              '$ git reset --hard [commit]'
            ],
            [
              'Discards all local changes in the working directory',
              '$ git reset --hard HEAD'
            ],
            [
              'Change the commit message',
              '$ git commit --amend'
            ],
          ],
        },
        {
          topic: 'SYNCHRONIZATION AND REMOTE REPOSITORIES',
          id: 10,
          data: [
            [
              'Pushes all local changesets to the remote repository',
              '$ git push [alias] [branch]'
            ],
            [
              'Downloads new remote history and incorporate changes',
              '$ git pull'
            ],
            [
              'Shows the name of remote repositories',
              '$ git remote -v'
            ],
            [
              'Get the latest changes from the origin but not merge',
              '$ git fetch'
            ],
            [
              'Remove the remote repository',
              '$ git remote rm [remote repo name]'
            ],
          ],
        },
        {
          topic: 'TAGGING',
          id: 11,
          data: [
            [
              'List tags',
              '$ git tag'
            ],
            [
              'List tags with specified pattern',
              '$ git tag -l "[pattern]"'
            ],
            [
              'Create annotated tag',
              '$ git tag -a [version] -m [message]'
            ],
            [
              'Create a lightweight tag',
              '$ git tag [version]'
            ],
            [
              'Tagging a commit',
              '$ git tag -a [version] [commit]'
            ],
            [
              'Sharing a tag',
              '$ git push [alias] [version]'
            ],
            [
              'Checkout tags',
              '$ git checkout [version]'
            ],
          ],
        },
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
                  <li key={jot.id} className="jot-listitem">
                    <Jot
                      id={jot.id}
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



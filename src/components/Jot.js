import React from 'react';

function Jot(props) {
  //jshint ignore:start
  return (
    <div className="jot border border-secondary ">
      <h4 className="jot-title">INSTALL GIT</h4>
        <ul>
          <li>
            <h4>Install git on macOS with Homebrew</h4>
            <p>$ brew install git</p>
          </li>
          <li>
            <h4>Install git on Debian-based linux</h4>
            <p>$ sudo apt-get install git</p>
          </li>
          <li>
            <h4>Install git on Windows with Chocolatey</h4>
            <p>$ choco install git</p>
          </li>
        </ul>
    </div>
  );
  //jshint ignore:end
}

export default Jot;
import React from 'react';

function Jot(props) {
  const {data} = props
  //jshint ignore:start
  return (
    <div className="jot border border-secondary ">
      <h4 className="jot-title">{props.topic}</h4>
        <ul>
          { data.map( data => {
            const description = data[0]
            const command = data[1]
            return (
              <li key={data.id}>
                <h4>{description}</h4>
                <p>{command}</p>
              </li>
            )
          })}
        </ul>
    </div>
  );
  //jshint ignore:end
}

export default Jot;


/*
<h4>Install git on Debian-based linux</h4>
<p>$ sudo apt-get install git</p>
<h4>Install git on Windows with Chocolatey</h4>
<p>$ choco install git</p>

*/
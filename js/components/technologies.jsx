import React from 'react';
import ReactDOM from 'react-dom';

export default class Technologies extends React.Component {
    render() {
    return <div className="technologies">
      <h3>Technologie || Technologies</h3>
      <div className="technologies__row">
        <div className="img">
          <div className="html"></div>
          <div className="overlay"><h4>HTML5</h4></div>
        </div>
        <div className="img">
          <div className="css"></div>
          <div className="overlay"><h4>CSS3</h4></div>
        </div>
        <div className="img">
          <div className="js"></div>
          <div className="overlay"><h4>JavaScript</h4></div>
        </div>
        <div className="img">
          <div className="sass"></div>
          <div className="overlay"><h4>SASS</h4></div>
        </div>
        <div className="img">
          <div className="rwd"></div>
          <div className="overlay"><h4>Responsive Web Design</h4></div>
        </div>
        <div className="img">
          <div className="jquery"></div>
          <div className="overlay"><h4>jQuery</h4></div>
        </div>
        <div className="img">
          <div className="es6"></div>
          <div className="overlay"><h4>ECMAScript 6</h4></div>
        </div>
        <div className="img">
          <div className="react"></div>
          <div className="overlay"><h4>React</h4></div>
        </div>
        <div className="img">
          <div className="git"></div>
          <div className="overlay"><h4>Git & GitHub</h4></div>
        </div>
        <div className="img">
          <div className="jira"></div>
          <div className="overlay"><h4>Jira</h4></div>
        </div>
      </div>
    </div>;
  }
}

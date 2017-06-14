import React from 'react';
import ReactDOM from 'react-dom';

export default class Graphic extends React.Component {
    render() {
    return <div className="technologies">
      <h3>Grafika || Graphic Design</h3>
      <div className="technologies__row">
        <div className="img">
          <div className="photoshop"></div>
          <div className="overlay"><h4>Adobe Photoshop</h4></div>
        </div>
        <div className="img">
          <div className="illustrator"></div>
          <div className="overlay"><h4>Adobe Illustrator</h4></div>
        </div>
        <div className="img">
          <div className="indesign"></div>
          <div className="overlay"><h4>Adobe InDesign</h4></div>
        </div>
        <div className="img">
          <div className="captivate"></div>
          <div className="overlay"><h4>Adobe Captivate</h4></div>
        </div>
        <div className="img">
          <div className="storyline"></div>
          <div className="overlay"><h4>Articulate Storyline</h4></div>
        </div>
      </div>
    </div>;
  }
}

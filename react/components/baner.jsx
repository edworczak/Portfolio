import React from 'react';
import ReactDOM from 'react-dom';

export default class Baner extends React.Component {
    render() {
    return <div className="baner">
      <h1 className="baner__title"><strong>E</strong>WA <strong>DWORCZAK</strong></h1>
      <div className="short-line" />
      <h3 className="baner__job-title">Junior Front-end Developer</h3>
      <h3 className="baner__job-title">Graphic Designer</h3>
      <h3 className="baner__job-title">Instructional Designer</h3>
    </div>;
  }
}

import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {
    render() {
    return <div className="about">
      <div className="about__pl">
        <h3>O mnie</h3>
        <p>Cotton candy lemon drops dessert candy canes muffin chocolate cake marzipan tootsie roll. Jelly beans bonbon soufflé pie lemon drops bonbon macaroon toffee. Lollipop candy canes fruitcake lollipop lemon drops chocolate croissant.</p>
      </div>
      <div className="vertical-line">
      </div>
      <div className="about__eng">
      <h3>About me</h3>
      <p>Cotton candy lemon drops dessert candy canes muffin chocolate cake marzipan tootsie roll. Jelly beans bonbon soufflé pie lemon drops bonbon macaroon toffee. Lollipop candy canes fruitcake lollipop lemon drops chocolate croissant.</p>
      </div>
    </div>;
  }
}

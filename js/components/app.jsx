import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import Baner from './baner.jsx';
import About from './about.jsx';
import Technologies from './technologies.jsx';

export default class App extends React.Component {
    render() {
    return <div className="container">
      <Baner />
      <About />
      <Technologies />
    </div>;
  }
}

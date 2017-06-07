import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import Header from './header.jsx';
import Baner from './baner.jsx';
import About from './about.jsx';
import Technologies from './technologies.jsx';
import Contact from './contact.jsx';

export default class App extends React.Component {
    render() {
    return <div className="container">
      <Header />
      <Baner />
      <About />
      <Technologies />
      <Contact />
    </div>;
  }
}

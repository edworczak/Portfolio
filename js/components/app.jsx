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
      <div className="row baner__image"><Baner /></div>
      <div className="row"><About /></div>
      <div className="row"><Technologies /></div>
      <div className="row"><Contact /></div>
    </div>;
  }
}

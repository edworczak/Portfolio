import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import Header from './header.jsx';
import Baner from './baner.jsx';
import About from './about.jsx';
import Technologies from './technologies.jsx';
import Graphic from './graphic.jsx';
import Portfolio from './portfolio.jsx';
import Contact from './contact.jsx';
import Footer from './footer.jsx';

export default class App extends React.Component {
  render() {
    return <div className="container">
      <Header />
      <div className="row baner__image"><Baner /></div>
      <div className="row"><About /></div>
      <div className="row"><Technologies /></div>
      <div className="row"><Graphic /></div>
      <div className="row"><Portfolio /></div>
      <div className="row"><Contact /></div>
      <div className="row"><Footer /></div>
    </div>;
  }
}

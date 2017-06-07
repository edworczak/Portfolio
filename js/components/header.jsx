import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
    render() {
    return <header>
      <div className="logo">E<strong>DWORCZAK</strong>
      </div>
      <div className="social">
        <a href="https://github.com/edworczak" target="_blank" title="GitHub"><i className="fa fa-git-square" aria-hidden="true"></i></a> <a href="https://www.linkedin.com/in/edworczak/?locale=en_US" target="_blank" title="LinkedIn"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
      </div>
    </header>;
  }
}

import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
    render() {
    return <header><div className="header__content">
      <div className="logo">E<strong>DWORCZAK</strong>
      </div>
      <div className="social">
        <a href="https://github.com/edworczak" target="_blank" title="GitHub"><i className="fa fa-github" aria-hidden="true"></i></a> <a href="https://www.linkedin.com/in/edworczak/?locale=en_US" target="_blank" title="LinkedIn"><span className="fa-stack fa-lg">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className="fa fa-linkedin fa-stack-1x" aria-hidden="true"></i>
        </span></a>
      </div>
    </div></header>;
  }
}

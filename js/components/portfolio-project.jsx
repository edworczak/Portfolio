import React from 'react';
import ReactDOM from 'react-dom';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageClassName: "portfolio__image " + this.props.imageClassName
    }
  }

  render() {
    let gitLink = [];
    if (this.props.gitLink != null) {
      gitLink.push(<a key={"git"+this.props.projectId} title="GitHub" href={this.props.gitLink} target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>);
    } else {
      gitLink.push(<div key={"git"+this.props.projectId} title="GitHub" className="button-disabled"><i className="fa fa-github" aria-hidden="true"></i></div>);
    }

    let webLink = [];
    if (this.props.webLink != null) {
      webLink.push(<a key={"web"+this.props.projectId} title="Strona || Website" href={this.props.webLink} target="_blank"><i className="fa fa-globe" aria-hidden="true"></i></a>);
    } else {
      webLink.push(<div key={"web"+this.props.projectId} title="Strona || Website" className="button-disabled"><i className="fa fa-globe" aria-hidden="true"></i></div>);
    }

    return <div className="portfolio__project">
      <div className={this.state.imageClassName}></div>
      <div className="portfolio__text">
        <div><h3>{this.props.name}</h3>
        <p><strong>PL:</strong> {this.props.descriptionPL}</p>
        <p><strong>ENG:</strong> {this.props.descriptionENG}</p></div>
        <div className="portfolio__buttons">
          {gitLink}
          {webLink}
        </div>
      </div>
    </div>
  }
}

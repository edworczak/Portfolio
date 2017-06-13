import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import Project from './portfolio-project.jsx';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [{
        name: "BookKeeper",
        imageClassName: "bookkeeper",
        descriptionPL: "Aplikacja dla domowej biblioteczki.",
        descriptionENG: "Application for home library.",
        gitLink: "https://github.com/edworczak/BookKeeper",
        webLink: null
      },{
        name: "Portfolio",
        imageClassName: "my-portfolio",
        descriptionPL: "Strona mojego portfolio.",
        descriptionENG: "My portfolio's website.",
        gitLink: "https://github.com/edworczak/Portfolio",
        webLink: ""
      }]
    }
  }

  render() {
    let projectsHTML = [];

    for (let i = 0; i < this.state.projects.length; i++) {
      projectsHTML.push(<Project key={i} projectId={i}
        name={this.state.projects[i].name}
        imageClassName={this.state.projects[i].imageClassName}
        descriptionPL={this.state.projects[i].descriptionPL}
        descriptionENG={this.state.projects[i].descriptionENG}
        gitLink={this.state.projects[i].gitLink}
        webLink={this.state.projects[i].webLink} />);
    }

    return <div>
      <h3>Portfolio</h3>
      <div className="portfolio">
        {projectsHTML}
      </div>
    </div>;
  }
}

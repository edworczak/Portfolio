import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import Project from './portfolio-project.jsx';
import projects from '../data/projects.jsx';

export default class Portfolio extends React.Component {
  render() {
    let projectsHTML = [];

    for (let i = 0; i < projects.length; i++) {
      projectsHTML.push(<Project key={i} projectId={i}
        name={projects[i].name}
        imageClassName={projects[i].imageClassName}
        descriptionPL={projects[i].descriptionPL}
        descriptionENG={projects[i].descriptionENG}
        gitLink={projects[i].gitLink}
        webLink={projects[i].webLink} />);
    }

    return <div>
      <h3>Portfolio</h3>
      <div className="portfolio">
        {projectsHTML}
      </div>
    </div>;
  }
}

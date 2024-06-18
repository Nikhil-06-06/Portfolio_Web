import React from 'react';
import { ProjectsData } from '../../Constants/GeneralConstants';

function Projects() {

  const projectCard = (data, index) => {
    return (
      <div className='project-card shadow-effect lighter-dark-bg' key={index}>
        <div className='project-image w-100'>{data.image}</div>
        <div className='project-name fs-24 m-sb'>{data.name}</div>
        <div className='project-description'>{data.description}</div>
      </div>
    );
  }

  return (
    <div className="column-flex">
      <div className="fs-32 m-b">PROJECTS</div>
      <div className="mt-40 w-100 projects-box">
        {ProjectsData.map((item, index) => projectCard(item, index))}
      </div>
    </div>
  )
}

export default Projects;
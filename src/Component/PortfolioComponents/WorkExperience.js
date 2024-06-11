import React from 'react';
import { Experience } from '../../Constants/GeneralConstants';

function WorkExperience() {

  const getExperienceCard = (data) => {
    return (
      <div className='experience-card lighter-dark-bg shadow-effect'>
        <div className='fs-24 m-sb'>{data.position}</div>
        <div className='fs-16 m-el'>{data.company}&nbsp;{data.duration}</div>
        <ul className='pdl-25'>{data.content.map((point, index) => <li key={index} className='mt-8'>{point}</li>)}</ul>
      </div>
    )
  }

  const getTimelineCard = (data, index) => {
    return(
      <div className='timeline-card-container' key={index}>
        <div className='logo'></div>
        {getExperienceCard(data)}
      </div>
    )
  }

  return (
    <div className="column-flex">
      <div className="fs-32 m-sb">Work Experience</div>
      <div className='timeline mt-40'>
        {Experience.map((item,index) => getTimelineCard(item, index))}
      </div>
    </div>
  )
}

export default WorkExperience
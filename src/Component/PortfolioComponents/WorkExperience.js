import React from 'react';
import { Experience } from '../../Constants/GeneralConstants';
import Timeline from '../Generic_Components/Timeline';

function WorkExperience() {

  return (
    <div className="column-flex">
      <div className="fs-32 m-b hl">WORK EXPERIENCE</div>
      <Timeline timelineData={Experience}/>
    </div>
  )
}

export default WorkExperience
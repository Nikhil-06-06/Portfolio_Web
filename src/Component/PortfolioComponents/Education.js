import React from 'react';
import { EducationData } from '../../Constants/GeneralConstants';
import Timeline from '../Generic_Components/Timeline';

function Education() {
  return (
    <div className="column-flex">
      <div className="fs-32 m-b">EDUCATION</div>
      <Timeline timelineData={EducationData}/>
    </div>
  )
}

export default Education
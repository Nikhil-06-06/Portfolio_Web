import React from 'react';
import { Skills } from '../../Constants/GeneralConstants';

function Skillset() {
  return (
    <div className="column-flex">
      <div className="fs-32 m-b">MY SKILLSET</div>
      <div className="mt-40 w-100 skill-box space-div">
        {Skills.map((item, index) => <div className='skill-card' key={index}>{item}</div>)}
      </div>
    </div>
  )
}

export default Skillset
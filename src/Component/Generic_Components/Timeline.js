import React from 'react';

function Timeline({timelineData}) {

  const getExperienceCard = (data) => {
    return (
      <div className='experience-card lighter-dark-bg shadow-effect border'>
        <div className='fs-24 m-sb align-center'>{data.position}</div>
        <div className='fs-16 m-el mt-4'><span className='highlight'>{data.company}&nbsp;{data.duration}</span></div>
        <ul className='pdl-25'>{data.content.map((point, index) => <li key={index} className='mt-8'>{point}</li>)}</ul>
      </div>
    )
  }

  const getTimelineCard = (data, index) => {
    return(
      <div className='timeline-card-container' key={index}>
        <img className='logo' src={data.logo} alt="img" />
        {getExperienceCard(data)}
      </div>
    )
  }

  return (
    <div className='timeline'>
      {timelineData.map((item,index) => getTimelineCard(item, index))}
    </div>
  )
}

export default Timeline
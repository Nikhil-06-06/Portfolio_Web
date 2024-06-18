import React from 'react';
import { IntroDetails, EditorDetails, Interests } from '../../Constants/GeneralConstants';

function Home() {

  //Introduction-Block  
  const getBasicInfoBlock = () => {
    return (
      <div className='column-flex align-start'>
        <div className='fs-18'>Hello I'm</div>
        <div className='fs-32 m-b'>{IntroDetails.NAME.toUpperCase()}</div>
        <div className='fs-24 m-m'>{IntroDetails.DESIGNATION.toUpperCase()}</div>
      </div>
    )
  }

  const getCVandSocialHandles = () => {
    return(
      <div className='column-flex align-start'>
        <div className='cv-btn gradient-block mt-40'>Download Resume</div>
        <div className='mt-30'>icons</div>
      </div>
    )
  }

  const getStaticEditor = () => {
    return (
      <div className='editor-block column-flex align-start lighter-dark-bg shadow-effect'>
        {EditorDetails.map((val, index) => <pre className='fs-18 m-m mg-8' key={index}>{val}</pre>)}
      </div>
    )
  }

  const getIntroductionBlock = () => {
    return (
      <div className='space-div w-100 mgb-150'>
        <div className='column-flex align-start'>
          {getBasicInfoBlock()}
          {getCVandSocialHandles()}
        </div>
        {getStaticEditor()}
      </div>
    )
  }

  //Interests Block

  const getInterestCard = (data) => {
    return (
      <div className='interest-card column-flex shadow-effect'>
        <div>{data.header}</div>
        <div className='mt-30'>{data.content}</div>
      </div>
    )
  }

  const getInterestsBlock = () => {
    return(
      <div className='column-flex w-100'>
        <div className='fs-32 m-b'>INTERESTS</div>
        <div className='mt-30 space-div w-100'> {Interests.map((data) => getInterestCard(data))} </div>
      </div>
    )
  }

  return (
    <div className='column-flex'>
      {getIntroductionBlock()}
      {getInterestsBlock()}
    </div>
  )
}

export default Home;
import React from "react";
import {
  IntroDetails,
  EditorDetails,
  Interests,
} from "../../Constants/GeneralConstants";
import TypewriterComponent from "typewriter-effect";
import { Linkedin, Github } from "lucide-react";

function Home() {
  const linkedIn = "LINKEDIN",
    github = "GITHUB",
    resume = "RESUME";
  //Introduction-Block
  const getBasicInfoBlock = () => {
    return (
      <div className="column-flex align-start">
        <div className="fs-18">Hello I'm</div>
        <div className="fs-32 m-b">
          <TypewriterComponent
            options={{
              strings: [`${IntroDetails.NAME.toUpperCase()}`],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="fs-24 m-m">
          {IntroDetails.DESIGNATION.toUpperCase()}
        </div>
      </div>
    );
  };

  const onCTAClick = (key) => {
    window.open(IntroDetails[key], "_blank");
  };

  const getCVandSocialHandles = () => {
    return (
      <div className="column-flex align-start w-100">
        <div
          className="cv-btn gradient-block mt-40 m-m border shadow-effect"
          onClick={() => onCTAClick(resume)}
        >
          Download Resume
        </div>
        <div className=" home-icons">
          <Linkedin
            className="icon-home"
            onClick={() => onCTAClick(linkedIn)}
          />
          <Github className="icon-home" onClick={() => onCTAClick(github)} />
        </div>
      </div>
    );
  };

  const getStaticEditor = () => {
    return (
      <div className="editor-block column-flex align-start lighter-dark-bg shadow-effect ml-40 border">
        {EditorDetails.map((val, index) => (
          <pre className="fs-18 m-m mg-8" key={index}>
            {val}
          </pre>
        ))}
      </div>
    );
  };

  const getIntroductionBlock = () => {
    return (
      <div className="space-div w-100 mgb-150">
        <div className="column-flex align-start">
          {getBasicInfoBlock()}
          {getCVandSocialHandles()}
        </div>
        {getStaticEditor()}
      </div>
    );
  };

  //Interests Block

  const getInterestCard = (data, idx) => {
    return (
      <div key={idx} className="interest-card column-flex shadow-effect mt-40 border">
        <div className="highlight m-m">{data.header}</div>
        <div className="mt-30">{data.content}</div>
      </div>
    );
  };

  const getInterestsBlock = () => {
    return (
      <div className="column-flex w-100">
        <div className="fs-32 m-b">INTERESTS</div>
        <div className="space-around-div w-100 flex-wrap">
          {" "}
          {Interests.map((data, idx) => getInterestCard(data, idx))}{" "}
        </div>
      </div>
    );
  };

  return (
    <div className="column-flex">
      {getIntroductionBlock()}
      {getInterestsBlock()}
    </div>
  );
}

export default Home;

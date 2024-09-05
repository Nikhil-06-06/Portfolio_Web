import React from "react";
import { AboutMeContent } from "../../Constants/GeneralConstants";

function AboutMe() {
  return (
    <div className="column-flex">
      <div className="fs-32 m-b hl">ABOUT ME</div>
      <div className="mt-40">
        <img className="img-container" src={AboutMeContent.image} alt="It's me" />
        <div>{AboutMeContent.content}</div>
      </div>
    </div>
  );
}

export default AboutMe;

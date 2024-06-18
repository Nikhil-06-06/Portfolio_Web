import React from "react";
import { AboutMeContent } from "../../Constants/GeneralConstants";

function AboutMe() {
  return (
    <div className="column-flex">
      <div className="fs-32 m-b">ABOUT ME</div>
      <div className="mt-40">
        <div className="img-container shadow-effect"></div>
        <div>{AboutMeContent}</div>
      </div>
    </div>
  );
}

export default AboutMe;

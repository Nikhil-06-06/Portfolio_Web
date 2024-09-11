import React from "react";
import { Skills } from "../../Constants/GeneralConstants";

function Skillset() {
  return (
    <div className="column-flex">
      <div className="fs-32 m-b hl">MY SKILLSET</div>
      <div className="mt-40 w-100 skill-box">
        {Skills.map((item, index) => (
          <img className="skill-card" key={index} src={item} alt="skill" />
        ))}
      </div>
    </div>
  );
}

export default Skillset;

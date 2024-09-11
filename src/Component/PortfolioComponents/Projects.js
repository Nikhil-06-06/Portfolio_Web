import React from "react";
import { ProjectsData } from "../../Constants/GeneralConstants";
import { SquareArrowOutUpRight } from "lucide-react";

function Projects() {
  const projectCard = (data, index) => {
    return (
      <div
        className="project-card shadow-effect lighter-dark-bg border"
        key={index}
      >
        <img className="project-image" src={data.image} alt={data.name} />
        <div className="project-name fs-24 m-sb">
          <span className="highlight">{data.name}</span>
        </div>
        <div className="project-description">
          {data.description}
          <span className="inline">
            {" "}
            <SquareArrowOutUpRight
              size={16}
              onClick={() => {
                window.open(data.link, "_blank");
              }}
            />{" "}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="column-flex">
      <div className="fs-32 m-b hl">PROJECTS</div>
      <div className="mt-40 w-100 projects-box" style={{ alignItems: "unset" }}>
        {ProjectsData.map((item, index) => projectCard(item, index))}
      </div>
    </div>
  );
}

export default Projects;

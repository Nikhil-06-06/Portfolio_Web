import React from "react";
import Home from "../Component/PortfolioComponents/Home";
import AboutMe from "../Component/PortfolioComponents/AboutMe";
import Skillset from "../Component/PortfolioComponents/Skillset";
import WorkExperience from "../Component/PortfolioComponents/WorkExperience";
import Projects from "../Component/PortfolioComponents/Projects";
import Education from "../Component/PortfolioComponents/Education";

function PortfolioContainer() {
  return (
    <div className="w-100 column-flex">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skillset />
      </section>
      <section id="work">
        <WorkExperience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
    </div>
  );
}

export default PortfolioContainer;

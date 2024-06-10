import React from "react";
import Home from "../Component/PortfolioComponents/Home";
import AboutMe from "../Component/PortfolioComponents/AboutMe";

function PortfolioContainer() {
  return (
    <div className="w-100 column-flex">
      <section id="home" className="w-100">
        <Home />
      </section>
      <section id="about-me" className="w-100">
        <AboutMe />
      </section>
    </div>
  );
}

export default PortfolioContainer;

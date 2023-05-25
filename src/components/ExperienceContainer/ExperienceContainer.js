import React from "react";
import { Element } from "react-scroll";
import ExperienceBox from "../ExperieceBox/ExperienceBox";
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
    <Element className="experience_container" id="exp">
      <h1>Experience</h1>
      <div className="experience_Container_info">
        <ExperienceBox number="1/2" title="Year" />
        <ExperienceBox
          number="1"
          title="Projects"
          style={{ backgroundColor: "purple" }}
        />
      </div>
    </Element>
  );
};

export default ExperienceContainer;

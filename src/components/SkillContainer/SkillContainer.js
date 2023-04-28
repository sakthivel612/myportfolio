import React from "react";
import { Element } from "react-scroll";
import skillimg from "../../MyImage/skill_image.jpg";
import { LinearProgress } from "@material-ui/core";
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className="skillContainer_image">
        <img src={skillimg} alt="skill_image" />
      </div>
      <div className="skillContainer_text">
        <h2>SKILLSET</h2>
        <div className="skillContainer_skillSet">
          <h5>REACT</h5>
          <div className="skillContainer_slider skillContainer_slider1">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer_skillSet">
          <h5>JAVA SCRIPT</h5>
          <div className="skillContainer_slider skillContainer_slider2">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
        <div className="skillContainer_skillSet">
          <h5>HTML</h5>
          <div className="skillContainer_slider skillContainer_slider3">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer_skillSet">
          <h5>CSS</h5>
          <div className="skillContainer_slider skillContainer_slider4">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer_skillSet">
          <h5>MY SQL</h5>
          <div className="skillContainer_slider skillContainer_slider5">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer_skillSet">
          <h5>MONGODB</h5>
          <div className="skillContainer_slider skillContainer_slider6">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
        <div className="skillContainer_skillSet">
          <h5>NODE JS</h5>
          <div className="skillContainer_slider skillContainer_slider7">
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;

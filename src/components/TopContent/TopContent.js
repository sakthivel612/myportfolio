import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
      <div className="topContent_container">
        <h1>Mr.Sakthivel</h1>
        <p>Full Stack Developer</p>
        <a href="https://main--zingy-froyo-221a22.netlify.app/">
          <button className="topContent_download_btn">My Resume</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent_mywork_btn">My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;

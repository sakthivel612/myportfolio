import React, { useState } from "react";
import "./Project.css";

const Project = ({ Image, title, description, link }) => {
  const [show, setShow] = useState(false);
  return (
    <a className="Project_link" href={link}>
      <div
        className="project"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show ? (
        <div className="project_content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        ) : (
        <img src={Image}  alt="project_img"/>
        )}
      </div>
    </a>
  );
};

export default Project;

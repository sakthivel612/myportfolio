import React from "react";
import { Element } from "react-scroll";
import Project from "../Projects/Project";
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const My_Projects = [
    {
      Image:
        "https://png.pngtree.com/thumb_back/fh260/background/20211118/pngtree-technology-round-dashboard-image_908915.jpg",
      title: "STUDENT_TEACHER_DASHBOARD",
      description: "This project is get data are student and teacher details and if we want add the extra details.",
      link: "https://master--voluble-bombolone-cccb6d.netlify.app/",
    },
    {
      Image:
        "https://imgix.bustle.com/inverse/7f/1a/75/7b/ebd7/4fed/97e5/ead63bf004be/the-new-iphone-xr-will-come-in-an-array-of-colors.png?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
      title: "Mobile_Cart",
      description: "This project is mobile price cart app",
      link: "https://rad-narwhal-f70a20.netlify.app/",
    },
  ];
  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>Here are two project i have done it.</p>
      <div className="projectContainer_projects">
        {My_Projects.map((project, index) => {
          return (
            <Project
              key={index}
              Image={project.Image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;

import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { FaRocket } from 'react-icons/fa';

function Projects() {
  return (
    <>
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">Projects&nbsp;{<FaRocket />} </div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;

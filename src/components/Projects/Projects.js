import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { FaRocket } from 'react-icons/fa';

function Projects() {
  return (
    <>
      <svg class="transition duration-300 ease-in-out delay-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400" id="svg" width="100%" height="100%">
        <path transform="rotate(-180 720 200)" class="transition-all duration-300 ease-in-out delay-150" fill="#151418ff" stroke-width="0" stroke="none" d="M 0,400 C 0,400 0,200 0,200 C 109.28571428571428,173 218.57142857142856,146 327,141 C 435.42857142857144,136 542.9999999999999,153 686,185 C 829.0000000000001,217 1007.4285714285713,264 1139,269 C 1270.5714285714287,274 1355.2857142857142,237 1440,200 C 1440,200 1440,400 1440,400 Z"></path>
      </svg>
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
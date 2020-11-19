import React from "react";
import Project from "../elements/Project";
import Resume from "../../resume.json";

function Projects() {
  if (Resume.projects.length !== 0) {
    return (
      <section className="section" id="projects">
        <div className="container">
          <h1 className="title">Projects</h1>
          <Project />
        </div>
      </section>
    );
  } else {
    return <></>
  }
}

export default Projects;

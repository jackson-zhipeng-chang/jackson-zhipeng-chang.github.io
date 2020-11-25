import React from "react";
import ProjectItem from "./ProjectItem"
import Resume from "../../resume.json";

function Project() {

  let content = []

  Resume.projects.forEach((element, index) => {
    content.push(
      <div className="column" key={index}>
        <ProjectItem
          key={index}
          name={element.name}
          description={element.description}
          image={element.image}
          highlights={element.highlights}
          link={element.link}
        />
      </div>
    );
  });

  return (
    <div className="projects-table">{content}</div>
  );
}

export default Project;

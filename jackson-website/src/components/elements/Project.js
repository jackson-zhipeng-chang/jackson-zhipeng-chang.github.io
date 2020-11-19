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
            title={element.title}
            url={element.url}
            image={element.cover_image}
            extract={element.description}
          />
        </div>
      );
    });

    var offset = 4 - Resume.projects.length;
    for (var i = 0; i < offset; i++) {
      content.push(<div className="column"></div>);
    }

  return content;
}

export default Project;

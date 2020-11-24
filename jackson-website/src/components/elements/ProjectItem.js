import React from "react";

function ProjectItem(props) {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">{props.name}</p>
      </div>
      <div className="card-image">
        <figure className="image">
          <img width="1000" height="420" src={props.image} alt="" />
        </figure>
      </div>
      <div className="card-content">
        <h1 className="heading">Description</h1>
        <div className="content">
          <strong>{props.description}</strong>
        </div>
        <div className="content">
          <strong className="tag is-gray">{props.highlights}</strong>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

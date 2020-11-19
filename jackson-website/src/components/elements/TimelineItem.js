import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <h1 className="title is-5">{props.position}</h1>
        <p className="heading">{props.startDate} - {props.endDate==="Invalid Date"? "present": props.endDate}</p>
        <h1 className="title is-4"><a className="has-text-black" href={props.website}>{props.company}</a></h1>
        <p style={{ maxWidth: "25em" }}>{props.summary}</p>
        <p style={{ maxWidth: "25em", fontWeight: "bold"}}>{props.highlights}</p>
      </div>
    </div>
  );
}

export default TimelineItem;

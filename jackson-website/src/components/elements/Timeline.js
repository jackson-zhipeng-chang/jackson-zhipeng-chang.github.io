import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";

function Timeline() {

  let showedYears = []

  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {Resume.work
        .map(item => {
          return new Date(item.startDate).getFullYear();
        })
        .map((year, i) => {
          let content = [];
          if (!showedYears.includes(year)){
            showedYears.push(year)
            content.push(
              <header key={i} className="timeline-header">
                <span className="tag is-success">{year}</span>
              </header>
            );
            content.push(
              Resume.work
                .filter(work => new Date(work.startDate).getFullYear() === year)
                .map((item, j) => {
                  return (
                    <TimelineItem
                      key={j}
                      startDate={new Date(item.startDate).toLocaleString("en-CA", {
                        month: "long",
                        year: "numeric"
                      })}
                      endDate={new Date(item.endDate).toLocaleString("en-CA", {
                        month: "long",
                        year: "numeric"
                      })}
                      company={item.company}
                      position={item.position}
                      website={item.website}
                      summary={item.summary}
                      highlights={item.highlights}
                    />
                  );
                })
            );
        } 
        return content;
      })}
    </div>
  );
}

export default Timeline;

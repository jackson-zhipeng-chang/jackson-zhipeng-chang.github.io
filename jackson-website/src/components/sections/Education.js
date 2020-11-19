import React from "react";
import Resume from "../../resume.json";

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h1 className="title">Education</h1>
        <div className="has-text-centered">
            <span className="icon has-text-link">
                <i className="fas fa-3x fa-graduation-cap"></i>
            </span>
            <div className="education-information">
                <p className="heading">{Resume.education[0].studyType}</p>
                <p className="title is-4"><a href="https://www.ualberta.ca" className="has-text-black"> <strong>University of Alberta</strong> </a></p>
                <p className="title is-5">{Resume.education[0].area}</p>
                <p className="title is-6">{new Date(Resume.education[0].startDate).toLocaleString("en-CA", { month: "long", year: "numeric" })} - {new Date(Resume.education[0].endDate).toLocaleString("en-CA", { month: "long", year: "numeric" })}</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

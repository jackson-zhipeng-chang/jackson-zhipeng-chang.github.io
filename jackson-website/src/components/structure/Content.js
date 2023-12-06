import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Education from "../sections/Education";


function Content() {
  return (
    <main>
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </main>
  );
}

export default Content;

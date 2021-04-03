import React, { Component } from "react";
import Header from "./components/structure/Header";
import Content from "./components/structure/Content";
import Footer from "./components/structure/Footer";
import Resume from "./resume.json";

/*
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-89926853-1');
  ReactGA.pageview('/homepage');
}
initializeReactGA();
*/
class App extends Component {
  componentDidMount() {
    document.title = [
      Resume.basics.name,
      Resume.basics.label,
      [Resume.basics.location.region, Resume.basics.location.country].join(", ")
    ].join(" | ");

    const queryParameters = window.location.search.trim()

    if (queryParameters) {
      window.location.replace("/")
    }

  }

  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;

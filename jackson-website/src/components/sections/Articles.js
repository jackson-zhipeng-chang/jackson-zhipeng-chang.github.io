import React, { Component } from "react";
import Article from "../elements/Article";

class Articles extends Component {
  constructor(props) {
    super();
    this.state = { articles: [] };
  }
/*
  componentDidMount() {
    data.forEach((element, index) => {
      articles.push(
        <div className="column" key={index}>
          <Article
            key={index}
            title={element.title}
            url={element.url}
            image={element.cover_image}
            extract={element.description}
          />
        </div>
      );
    });
    var offset = 4 - data.length;
    for (var i = 0; i < offset; i++) {
      articles.push(<div className="column"></div>);
    }
    this.setState({ articles: articles });
  }
  */

  render() {
    return (
      <section className="section" id="articles">
        <div className="container">
          <h1 className="title">Projects</h1>
          <div className="columns">{this.state.articles}</div>
        </div>
      </section>
    );
  }
}

export default Articles;

import "bootstrap/dist/css/bootstrap.css";
import QuestionLayout from "./questionLayout";
import { Route } from "react-router-dom";
import React, { Component } from "react";
import ScoreLayout from "./scoreLayout";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <Route path="/" exact component={QuestionLayout} />
      </div>
    );
  }
}

export default App;

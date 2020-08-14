import React, { Component } from "react";
import cat from "./cat-image.gif";
import happyCat from "./happy-cat.gif";
import "./quiz-app.css";
const ScoreLayout = (props) => {
  if (props.score > 5)
    return (
      <div className="onSubmit">
        <p> You seem to know me pretty well! :) </p>
        <p> Your score is {props.score}! </p>
        <p>Screenshot your Score!</p>
        <img src={cat} />
      </div>
    );
  else if (props.score > 6)
    return (
      <div className="onSubmit">
        <p>Amazing!! :D</p>
        <p> Your score is {props.score} !</p>
        <p>Screenshot your Score!</p>
        <img src={happyCat} />
      </div>
    );
  else
    return (
      <div className="onSubmit">
        <p> Umm..we really need to talk more! :( </p>
        <p> Your score is {props.score} ! </p>
        <p>Screenshot your Score!</p>
        <img src={cat} />
      </div>
    );
};

export default ScoreLayout;

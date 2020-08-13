import React, { Component } from "react";
const ScoreLayout = (props) => {
  if (props.score > 5)
    return <div>Amazing!! Your score is {props.score} ! I'm Happy yayyy!</div>;
  else
    return (
      <div> Umm..we really need to talk more! Your score is {props.score}</div>
    );
};

export default ScoreLayout;

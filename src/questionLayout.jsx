import React, { Component } from "react";
import { getQuestion } from "./getQuestions";
import { getAnswer } from "./getAnswer";
import Button from "./button";
import { getScore } from "./getScore";
import ScoreLayout from "./scoreLayout";
import "./quiz-app.css";
class QuestionLayout extends Component {
  state = {
    id: 1,
    question: getQuestion(1),
    answer: getAnswer(1),
    score: 0,
    selectedOption: "",
    responses: 1,
  };

  handleOptionChange = async (changeEvent) => {
    if (this.state.id <= 10) {
      this.setState(
        {
          selectedOption: changeEvent.target.value,
        },
        this.changeScore
      );
    }
  };

  handleNext = () => {
    let id = this.state.id;
    id = id + 1;
    if (id <= 10)
      this.setState({
        id: id,
        question: getQuestion(id),
        answer: getAnswer(id),
        responses: id,
      });
    else if (id > 10) this.setState({ responses: id });
  };
  changeScore = () => {
    let score = this.state.score;
    score = score + 1;
    if (this.state.selectedOption === this.state.answer.oId) {
      this.setState({ score: score }, () => getScore(this.state.score));
    }
  };
  render() {
    return (
      <div className="container">
        {this.state.responses < 11 ? (
          <div className="container p-5">
            <div className="pageNumber">{this.state.question._id} /10</div>
            <div className="question">
              <p>"{this.state.question.title}"</p>
            </div>
            <div className="custom-control custom-radio p-3 radio-btn">
              {this.state.question.options.map((m) => (
                <div key={m._id}>
                  <input
                    type="radio"
                    id={m._id}
                    name="customRadio"
                    value={m._id}
                    checked={false}
                    onChange={this.handleOptionChange}
                    className="custom-control-input p-4"
                  />
                  <label className="custom-control-label" htmlFor={m._id}>
                    {m.option}
                  </label>
                </div>
              ))}
            </div>

            <div>
              <Button
                id={this.state.id}
                onClickPrevious={this.handlePrevious}
                onClickNext={this.handleNext}
              />
            </div>
          </div>
        ) : (
          <ScoreLayout score={this.state.score} />
        )}
      </div>
    );
  }
}

export default QuestionLayout;

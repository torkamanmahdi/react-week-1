import React, { Component } from "react";
import "./Addition.css";
class Addition extends Component {
  state = {
    num1: 0,
    num2: 0,
    response: 0,
    score: 0,
  };
  changeState() {
    let number1 = parseInt(Math.random() * 10);
    let number2 = parseInt(Math.random() * 10);
    let totalNumber = number1 + number2;
    this.setState({
      num1: number1,
      num2: number2,
      response: totalNumber,
      score: 0,
    });
  }
  upperScore() {
    this.setState({
      score: this.state.score + 1,
    });
    let getInput = document.querySelector(".guessNumber");
    getInput.style.border = "4px solid green";
    getInput.value = "";
  }
  downerScore() {
    this.setState({
      score: this.state.score - 1,
    });
    let getInput = document.querySelector(".guessNumber");
    getInput.style.border = "4px solid red";
    getInput.value = "";
  }
  inputKeyPress(event) {
    let inputValue = parseInt(document.querySelector(".guessNumber").value);
    if (event.key === "Enter" && inputValue !== null) {
      this.changeState();
      if (this.state.response === inputValue) {
        this.upperScore();
      } else if (this.state.response !== inputValue) {
        this.downerScore();
      }
      if (this.state.score === 9) {
        alert("you are win, Hoooooooora");
        this.setState({
          score: 0,
        });
      }
    }
  }
  render() {
    return (
      <>
        <div className="container mx-auto text-center py-10">
          <div className="text-6xl flex items-center justify-center">
            {this.state.num1} + {this.state.num2}
          </div>
          <input
            type="text"
            className="guessNumber border-4 border-black rounded-md p-2 mt-5"
            onKeyPress={this.inputKeyPress.bind(this)}
            value={this.inputValue}
            placeholder="Enter Number"
          />
        </div>
        <div className="mt-5 text-center">Score: {this.state.score}</div>
      </>
    );
  }
}
export default Addition;

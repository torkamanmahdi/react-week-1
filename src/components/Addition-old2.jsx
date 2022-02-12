import React, { Component } from "react";

let inputValue = document.querySelector(".input-value");

class Addition extends Component {
  state = {
    num1: parseInt(Math.random() * 10),
    num2: parseInt(Math.random() * 10),
    response: 0,
    score: 0,
  };

  inputKeyPress(event) {
    if (event.key === 13) {
      console.log(event)
      if (inputValue.value === this.state.num1 + this.state.num1) {
        inputValue.style.border = "2px solid green";
        this.setState.score = this.state.score + 1;
        this.setState.score = parseInt(this.state.score);
        // this.numberGenerator();
        if (this.state.score === 10) {
          alert("You win!!! HOOOOORA");
          window.location.reload();
        }
      } else {
        inputValue.style.border = "2px solid red";
        this.setState.score = this.state.score - 1;
        this.setState.score = parseInt(this.state.score);
        // this.numberGenerator();
      }
      inputValue.value = "";
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
            className="guessNumber border-2 border-black rounded-md p-2 mt-5"
            onKeyPress={this.inputKeyPress}
            placeholder="Enter Number"
          />
        </div>
        <div className="mt-5 text-center">
          Score: {this.inputKeyPress.score}
        </div>
      </>
    );
  }
}
export default Addition;

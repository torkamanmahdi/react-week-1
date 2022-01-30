import React, { Component } from "react";

class Addition extends Component {
  state = {
    num1: parseInt(Math.random() * 10),
    num2: parseInt(Math.random() * 10),
    total: parseInt(this.num1 + this.num2),
    response: 0,
    score: 0,
  };
  validateNumberSum() {
    if (this.state.num1) {
      console.log();
    }
  }
  pressEnter(event) {
    if (event.key === "Enter") {
      alert("you Press Enter button");
    } else if (event.key === "n") {
      alert("n button");
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
            onKeyPress={this.pressEnter}
          />
        </div>
        <div className="mt-5 text-center">Score: {this.state.score}</div>
      </>
    );
  }
}
export default Addition;

import React, { Component } from "react";
import "./style.css";

class TowersOfHanoi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [4, 3, 2, 1],
      b: [],
      c: [],
      gameWon: false
    };
  }

  // movePiece = (startStack, endStack) => {
  //   const temp = this.state[startStack].pop()
  //   this.state[endStack].push(temp);
  //   if (!this.state.gameWon) {
  //     this.setState({
  //       a: this.state.a,
  //       b: this.state.b,
  //       c: this.state.c,
  //       gameWon: this.state.gameWon
  //     });
  //   }
  // };

  // isLegal = (startStack, endStack) => {
  //   const startStackLength = this.state[startStack].length;
  //   const endStackLength = this.state[endStack].length;
  //   if (
  //     startStackLength === 0 ||
  //     startStack === endStack ||
  //     this.state[startStack][startStackLength - 1] >
  //       this.state[endStack][endStackLength - 1]
  //   ) {
  //     return false;
  //   }
  //   return true;
  // };

  checkForWin = () => {
    const winningStack = "4,3,2,1";
    if (
      this.state.b.toString() === winningStack ||
      this.state.c.toString() === winningStack
    ) {
      this.setState({
        ...this.state,
        gameWon: true
      });
    }
  };

  onDrop = (e, stack) => {
    console.log(stack);
  };

  render() {
    return (
      <div>
        <div data-stack="a" onDrop={e => this.onDrop(e, "a")}>
          {this.state.a.map(num => (
            <div data-block={num * 25} draggable />
          ))}
        </div>
        <div data-stack="b" onDrop={e => this.onDrop(e, "b")}>
          {this.state.b.map(num => (
            <div data-block={num * 25} draggable />
          ))}
        </div>
        <div data-stack="c" onDrop={e => this.onDrop(e, "c")}>
          {this.state.c.map(num => (
            <div data-block={num * 25} draggable />
          ))}
        </div>
        {this.state.gameWon && (
          <div id="announce-game-won">
            <p>You won!</p>
          </div>
        )}
      </div>
    );
  }
}

export default TowersOfHanoi;

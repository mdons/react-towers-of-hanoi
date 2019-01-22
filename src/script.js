import React, { Component } from "react";
import "./style.css";

class TowersOfHanoi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [4, 3, 2, 1],
      b: [],
      c: [],
      gameWon: false,
      turnsTaken: 0
    };
  }

  movePiece = (startStack, endStack) => {
    let gameState = this.state;
    if (!gameState.gameWon) {
      const temp = gameState[startStack].pop();
      gameState[endStack].push(temp);
      gameState.turnsTaken++;
      this.setState(gameState);
    }
  };

  isLegal = (startStack, endStack, disc) => {
    const startStackLength = this.state[startStack].length;
    const endStackLength = this.state[endStack].length;
    const num = parseInt(disc);
    if (
      num !== this.state[startStack][startStackLength - 1] ||
      num > this.state[endStack][endStackLength - 1]
    ) {
      return false;
    }
    return true;
  };

  checkForWin = () => {
    const winningStack = "4,3,2,1";
    if (
      this.state.b.toString() === winningStack ||
      this.state.c.toString() === winningStack
    ) {
      this.setState({
        gameWon: true
      });
    }
  };

  onDragOver = event => {
    event.preventDefault();
  };

  onDragStart = (event, disc, startStack) => {
    event.dataTransfer.setData("disc", disc);
    event.dataTransfer.setData("startStack", startStack);
  };

  onDrop = (event, endStack) => {
    const disc = event.dataTransfer.getData("disc");
    const startStack = event.dataTransfer.getData("startStack");
    if (this.isLegal(startStack, endStack, disc)) {
      this.movePiece(startStack, endStack);
      this.checkForWin();
    }
  };

  render() {
    return (
      <div>
        <div
          data-stack="a"
          onDragOver={this.onDragOver}
          onDrop={e => this.onDrop(e, "a")}
        >
          {this.state.a.map(num => (
            <div
              key={num}
              data-block={num * 25}
              draggable
              onDragStart={e => this.onDragStart(e, num, "a")}
            />
          ))}
        </div>
        <div
          data-stack="b"
          onDragOver={this.onDragOver}
          onDrop={e => this.onDrop(e, "b")}
        >
          {this.state.b.map(num => (
            <div
              key={num}
              data-block={num * 25}
              draggable
              onDragStart={e => this.onDragStart(e, num, "b")}
            />
          ))}
        </div>
        <div
          data-stack="c"
          onDragOver={this.onDragOver}
          onDrop={e => this.onDrop(e, "c")}
        >
          {this.state.c.map(num => (
            <div
              key={num}
              data-block={num * 25}
              draggable
              onDragStart={e => this.onDragStart(e, num, "c")}
            />
          ))}
        </div>
        <div>
          <p>Turns taken: {this.state.turnsTaken}</p>
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

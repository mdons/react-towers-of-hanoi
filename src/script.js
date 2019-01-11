import React, { Component } from "react";
import "./style.css";

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
  }

  movePiece = () => {};

  render() {
    return (
      <div>
        <div data-stack="1" onClick={this.movePiece}>
          {this.state.a.map(num => {
            return <div data-block={num * 25} />;
          })}
        </div>
        <div data-stack="2">
          {this.state.b.map(num => {
            return <div data-block={num * 25} />;
          })}
        </div>
        <div data-stack="3">
          {this.state.c.map(num => {
            return <div data-block={num * 25} />;
          })}
        </div>
      </div>
    );
  }
}

export default TowersOfHanoi;

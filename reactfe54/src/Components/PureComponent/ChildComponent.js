import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return currentState;
  }

  render() {
    console.log("render comment");
    return (
      <div>
        <p>{this.props.likeNumber.number}</p>
        <div className="bg-dark p-2 mt-2">
          <p className="text-primary font-weight-bold">Long</p>
          <p className="text-light">Ahuhu</p>
        </div>
      </div>
    );
  }

  compomentDidUpdate() {
    console.log("compomentDidUpdate");
  }
}

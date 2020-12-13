import React, { Component } from "react";
import ChildComponentLifeCycle from "./ChildComponentLifeCycle";

export default class ReactLifeCycle extends Component {
  // Life Cycle là các hàm có sẵn của react
  constructor(props) {
    super(props);
    this.state = { number: 1 };
    console.log("constructor");
  }

  static getDerivedStateFromProps() {
    //   chạy trước khi render được sinh ra
    console.log("getDerivedStateFromPorps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  render() {
    return (
      <div
        className="container text-center"
        style={{ marginTop: "300px", alignContent: "center" }}
      >
        {this.state.number}
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        {this.state.number < 2 ? <ChildComponentLifeCycle /> : ""}
      </div>
    );
  }

  //   Tới đây thì gọi API
  componentDidMount() {
    console.log("componentDidMount");
  }
}

import React, { Component } from "react";

export default class ChildComponentLifeCycle extends Component {
  timeout = setInterval(() => {
    console.log("setInterval");
  }, 1000);
  constructor(props) {
    super(props);
    console.log("child constructor");
  }
  static getDerivedStateFromProps() {
    console.log("child getDerivedStateFromProps");
  }
  render() {
    return <div>Child Component</div>;
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }

  componentDidMount() {
    console.log("child componentDidmout");
  }

  componentDidCatch() {
    console.log("child componentDidCatch");
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
    console.log("child componentWillUnmount");
  }
}

import React, { Component } from "react";

export default class HandleEvent extends Component {
  showMess = () => {
    alert("hello you!");
  };

  showInfo = (info) => {
    alert(info);
  };
  render() {
    const title = "cybersoft";
    return (
      <div className="container">
        <h3>Handle Event</h3>

        {/* Show alert cách 1 */}
        <button onClick={this.showMess}>Click me</button>
        {/* Show alert cách 2 */}
        <button
          onClick={() => {
            alert(`hello you! ${title}`);
          }}
        >
          show message
        </button>
        {/* Show alert cách 3 */}
        <button
          onClick={() => {
            this.showInfo("hello fe54");
          }}
        >
          show info
        </button>

        <button onClick={this.showInfo.bind(this, "hello cyberfe54")}>
          show info
        </button>
      </div>
    );
  }
}

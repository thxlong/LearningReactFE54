import React, { Component } from "react";
import { connect } from "react-redux";
import KetQuaTroChoi from "./KetQuaTroChoi";

export class XucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((XucXac, index) => {
      return (
        <img key={index} src={XucXac.hinhAnh} width="50px" height="50px" />
      );
    });
  };
  render() {
    console.log("props xúc xắc: ", this.props);
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-3">
            <button className="btn btn-success p-5">
              <span className="display-4">TÀI</span>
            </button>
          </div>

          <div className="col-6">{this.renderXucXac()}</div>

          <div className="col-3">
            <button className="btn btn-danger p-5">
              <span className="display-4">XỈU</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.stateGameXucXac.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);

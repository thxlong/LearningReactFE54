import React, { Component } from "react";

export default class DataBindingClassComponent extends Component {
  sinhVien = {
    ma: "0001",
    ten: "Nguyễn Văn Tèo",
    hinhAnh: "https://picsum.photos/200",
  };

  rederPicture = () => {
    return <img src={this.sinhVien.hinhAnh} width="200" height="300" />;
  };

  render() {
    const title = "front end 54";
    const renderTitle = () => {
      return <p className="text-danger">{title}</p>;
    };


    return (
      <div>
        <h3>OK</h3>
        <p>Tiêu đề: {title}</p>
        {renderTitle()}
        <h3>Thông tin sinh viên</h3>
        <ul>
          <li>Mã sinh viên: {this.sinhVien.ma}</li>
          <li>{this.sinhVien.ten}</li>
          <li>
            <img src={this.sinhVien.hinhAnh} width="300" height="300"></img>
          </li>
        </ul>
      </div>
    );
  }
}

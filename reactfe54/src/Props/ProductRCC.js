import React, { Component } from "react";

export default class ProductRCC extends Component {
  // this.props: là thuộc tính có sẵn của reacct class component dùng để nhận giá triwj từ component cha truyền vào

  // this.props thuộc thính không được gán lại giá trị mới
  render() {
    // this.pros.sanPham={}; ----> lỗi không được gán lại
    let { sanPham } = this.props;
    return (
      <div classname="card">
        <img classname="card-img-top" src={sanPham.hinhAnh} />
        <div classname="card-body">
          <h4 classname="card-title">{sanPham.tenSP}</h4>
          <p classname="card-text">{sanPham.manHinh}</p>
        </div>
      </div>
    );
  }
}

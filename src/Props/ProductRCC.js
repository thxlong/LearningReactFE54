import React, { Component } from "react";

export default class ProductRCC extends Component {
  // this.props: là thuộc tính có sẵn của reacct class component dùng để nhận giá triwj từ component cha truyền vào

  // this.props thuộc thính không được gán lại giá trị mới
  render() {
    // this.pros.sanPham={}; ----> lỗi không được gán lại
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={sanPham.hinhAnh} />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.manHinh}</p>
        </div>
      </div>
    );
  }
}

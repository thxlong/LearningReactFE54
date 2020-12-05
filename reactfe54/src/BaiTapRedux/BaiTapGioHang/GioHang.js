import React, { Component } from "react";
import { connect } from "react-redux";

export class GioHang extends Component {
  render() {
    console.log("prods giỏ hàng: ", this.props.gioHang);
    return (
      <div>
        <div className="bg-secondary">
          <h1 className="text-center display-4 ">Giỏ hàng</h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((spGH, index) => {
              return (
                <tr key={index}>
                  <td>{spGH.maSP}</td>
                  <td>{spGH.tenSP}</td>
                  <td>
                    <img src={spGH.hinhAnh} height="50" width="50" />
                  </td>
                  <td>{spGH.soLuong}</td>
                  <td>{spGH.donGia}</td>
                  <td>{spGH.donGia * spGH.soLuong}</td>
                  <td>
                    <button className="btn btn-danger">Xoá</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

// Định nghĩa hàm lấy state từ redux về biến thành prods của reactComponent
const mapStateToProps = (state) => {
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};

// Kết nối react component với redux store tạo ra 1 component mới export ra ngoài
export default connect(mapStateToProps)(GioHang);

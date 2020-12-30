import React, { Component } from "react";
import { connect } from "react-redux";

export class TableSinhVien extends Component {
  renderSinhVien = () => {
    return this.props.mangSinhVien.map((sv, index) => {
      return (
        <tr key={index}>
          <td>{sv.maSinhVien}</td>
          <td>{sv.tenSinhVien}</td>
          <td>{sv.email}</td>
          <td>{sv.soDienThoai}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaSinhVien(sv.maSinhVien);
              }}
            >
              Xoá
            </button>
            <button
              className="btn btn-info"
              onClick={() => {
                this.props.dispatch({
                  type: "SUA_SINH_VIEN",
                  sinhVienSua: sv,
                });
              }}
            >
              Sửa
            </button>
            <button className="btn btn-warning" onClick={() => {}}>
              Cập nhật
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <table className="table bg-dark text-white">
          <thead>
            <tr>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
            </tr>
          </thead>

          <tbody>{this.renderSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

// Ví dụ () => {return {}}= () =>({})
// Ví dụ () => {return <div></div>} <=> ()=> {<div></div>}
const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaSinhVien: (maSVClicked) => {
      const action = {
        type: "XOA_SINH_VIEN",
        maSVXoa: maSVClicked,
      };

      dispatch(action);
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(TableSinhVien);

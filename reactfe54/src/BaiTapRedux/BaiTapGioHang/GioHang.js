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
                  <td>
                    <button
                      onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, -1);
                      }}
                    >
                      -
                    </button>
                    {spGH.soLuong}
                    <button
                      onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, 1);
                      }}
                    >
                      +
                    </button>
                  </td>
                  <td>{spGH.giaBan}</td>
                  <td>{spGH.giaBan * spGH.soLuong}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.xoaGioHang(spGH.maSP);
                      }}
                    >
                      Xoá
                    </button>
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

// Hàm tạo ra 1 props gửi lên redux store (tất cả reducer)
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      console.log(maSPClick);

      // Đưa dữ liệu lên redux store (reducer)
      const action = {
        // tên những type của action cần phải khác nhau
        type: "XOA_GIO_HANG",
        maSPXoa: maSPClick,
      };

      // Dùng hàm dispatch gửi action lên reducer
      dispatch(action);
    },

    tangGiamSoLuong: (maSPClick, soLuong) => {
      // Tạo ra action
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        maSPClick: maSPClick,
        soLuong: soLuong,
      };

      // Đưa dư liệu lên reducer
      dispatch(action);
    },
  };
};

// Kết nối react component với redux store tạo ra 1 component mới export ra ngoài
export default connect(mapStateToProps, mapDispatchToProps)(GioHang);

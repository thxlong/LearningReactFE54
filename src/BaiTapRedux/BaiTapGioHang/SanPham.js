import React, { Component } from "react";
import { connect } from "react-redux";

export class SanPham extends Component {
  render() {
    console.log("prods sp:", this.props);
    let { sanPham } = this.props;
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src={sanPham.hinhAnh}
            alt
            height="350"
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
          </div>

          <div className="card-footer">
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.themGioHang(sanPham);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// Hàm gửi giá trị đi
const mapDispatchToProps = (dispatch) => {
  // dispatch là tham số từ redux trả ra (nó là 1 hàm dùng để gửi giá trị lên store)
  return {
    themGioHang: (spClick) => {
      console.log("spClick", spClick);

      // Gửi dữ liệu lên redux

      // Bước 1: Tạo action
      const action = {
        type: "THEM GIO HANG", // type thuộc tính bắc buộc
        sanPhamClick: { ...spClick, soLuong: 1 },
        // thuộc tính thứ 2 là giá trị gửi lên redux
      };

      // Bước 2: Sử dụng phương thức dispatch để đưa action lên redux (reducer)
      dispatch(action);
      console.log("spClick", spClick);
    },
  };
};

// kết nối component với store
// Tham số 1 của connect: là mapStateToProps (nếu không lấy dữ liệu nào từ store về thì để null)
// Tham số 2 của connect: là mapDispatchToProp hàm này sẽ tạo ra props là function đưa dữ liệu lên store
export default connect(null, mapDispatchToProps)(SanPham);

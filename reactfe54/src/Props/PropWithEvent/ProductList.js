// file render ra sản phẩm
import React, { Component } from "react";
import productList from "../data/productList.json";
import Product from "../Product";
import Modal from "./Modal";

export default class ProductList extends Component {
  // State là 1 object sẽ được thay đổi khi setState
  // Yếu tố đặt  state phải thoả: cùng trên 1 giao diện chứa giỏ hàng & chứa nút xử lý (event: hover)
  state = {
    productDetail: productList[0],

    // Tổ chức năng để thêm sản phẩm trong giỏ hàng
    object: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        giaBan: 5700000,
        hinhAnh: "./img/imgdt/vsphone.jpg",
        soLuong: 1,
        // Thành tiền: những gì liên quan đến tính toán thì không lưu
      },
    ],
  };
  renderProductListHandler = () => {
    return productList.map((product, index) => {
      return (
        <Product
          onViewDetailHandler={this.viewDetailHandler}
          onAddToCartHandler={this.addToCart}
          prod={product}
          key={index}
        />
      );
    });
  };

  viewDetailHandler = (sp) => {
    // console.log("sản phẩm:", sp);
    this.setState({
      productDetail: sp,
    });
  };

  addToCart = (product) => {
    const productUpdate = { ...product, soLuong: 1 };
    // console.log("product:", product);

    const index = this.state.object.findIndex(
      (product) => product.maSP === productUpdate.maSP
    );

    if (index !== -1) {
      const newCart = [...this.state.object];
      newCart[index].soLuong += 1;
      this.setState({
        object: newCart,
      });
    } else {
      this.setState({
        object: [...this.state.object, productUpdate],
      });
    }
  };

  // Định nghĩa sự kiệm xoá giỏ hàng tại nơi chứa state giỏ hàng
  deleteItem = (maSPClicked) => {
    // console.log(maSPClicked);
    // tạo ra 1 giỏ hàng mới giống giá trị giỏ hàng cũ
    let gioHangCapNhat = [...this.state.object];
    // Xử lý xoá trên giỏ hàng mới
    let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === maSPClicked);
    if (index !== 1) {
      gioHangCapNhat.splice(index, 1);
    }

    // Gán lại giỏ hàng cũ bằng giỏ hàng mới
    this.setState({
      object: gioHangCapNhat,
    });
  };

  // Định nghĩa chức năng tăng giảm số lượng sản phẩm
  tangGiamSoLuong = (maSPClicked, soLuong) => {
    console.log(maSPClicked);
    let gioHangCapNhat = [...this.state.object];

    // Tìm trong giỏ hàng có sản phẩm mã = với sp được click + hoặc -
    let spGioHang = gioHangCapNhat.find((spGH) => spGH.maSP === maSPClicked);
    // Tìm thấy sp trong giỏ hang
    if (spGioHang) {
      spGioHang.soLuong += soLuong;
    }

    // Cập nhật lại giỏ hàng
    this.setState({
      object: gioHangCapNhat,
    });
  };

  render() {
    const { productDetail, object } = this.state;
    return (
      <div>
        {/* function Modal */}
        <Modal
          cartProps={object}
          deleteItem={this.deleteItem}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <div className="row">{this.renderProductListHandler()}</div>

        <div className="row">
          <div className="col-6 text-center">
            <h4>{productDetail.tenSP}</h4>
            <img src={productDetail.hinhAnh} width="300px" />
          </div>

          <div className="col-6 text-center">
            <h4>Thông số kỹ thuật</h4>
            <table className="table">
              <tr>
                <th>Màn hình</th>
                <td>{productDetail.manHinh}</td>
              </tr>

              <tr>
                <th>Hệ điều hành</th>
                <td>{productDetail.heDieuHanh}</td>
              </tr>

              <tr>
                <th>Camera trước</th>
                <td>{productDetail.cameraTruoc}</td>
              </tr>

              <tr>
                <th>Camera sau</th>
                <td>{productDetail.cameraSau}</td>
              </tr>

              <tr>
                <th>RAM</th>
                <td>{productDetail.ram}</td>
              </tr>

              <tr>
                <th>ROM</th>
                <td>{productDetail.rom}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

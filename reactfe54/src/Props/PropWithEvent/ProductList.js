// file render ra sản phẩm
import React, { Component } from "react";
import productList from "../data/productList.json";
import Product from "../Product";
import Modal from "./Modal";

export default class ProductList extends Component {
  // State là 1 object sẽ được thay đổi khi setState
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

  render() {
    const { productDetail, object } = this.state;
    return (
      <div>
        {/* function Modal */}
        <Modal cartProps={object} />
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

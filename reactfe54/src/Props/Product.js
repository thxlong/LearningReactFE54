import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { prod, onViewDetailHandler,onAddToCartHandler  } = this.props;

    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" src={prod.hinhAnh} alt height="300px" />
          <div className="card-body">
            <h4 className="card-title">{prod.tenSP}</h4>
            <p className="card-text">{prod.giaBan}</p>

            <div className="text-center">
              <button
                className="btn btn-info"
                //   Function viewDetailHander nằm bên class khác nên ko gọi được
                onClick={() => {
                  onViewDetailHandler(prod);
                }}
              >
                Xem chi tiết
              </button>

              <button
                className="btn btn-danger"
                onClick={() => {
                  onAddToCartHandler(prod);
                }}
              >
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

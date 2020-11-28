import React, { Component } from "react";
import ProductRFC from "./ProductRFC";

export default class DemoProps extends Component {
  render() {
    return (
      <div className="container ">
        <h3 className="text-center">Danh sách sản phẩm</h3>
        <div className="row">
          <div className="col-3">
            {/* Sử dụng props để thay đổi nội dung của Func chung */}
            <ProductRFC name="Iphone"  price="1000$" />
          </div>

          <div className="col-3">
            <ProductRFC name="Samsung" price="1200$" />
          </div>

          <div className="col-3">
            <ProductRFC name="Sony" price="1300$" />
          </div>

          <div className="col-3">
            <ProductRFC name="Nokia" price="1400$" />
          </div>
        </div>
      </div>
    );
  }
}

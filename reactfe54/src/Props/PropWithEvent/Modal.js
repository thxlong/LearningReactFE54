import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    return (
      <div>
        <div>
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Giỏ hàng</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <tr>
                      <td>Mã SP</td>
                      <td>Hình ảnh</td>
                      <td>Tên sản phẩm</td>
                      <td>Số lượng </td>
                      <td>Đơn giá</td>
                      <td>Thành tiền</td>
                    </tr>

                    {this.props.cartProps.map((product, index) => {
                      return (
                        <tr key={index}>
                          <td>{product.maSP}</td>
                          <td>
                            <img
                              src={product.hinhAnh}
                              width="30px"
                              height="30px"
                            />
                          </td>
                          <td>{product.tenSP}</td>
                          <td>{product.soLuong}</td>
                          <td>{product.giaBan}</td>
                          <td>{product.giaBan * product.soLuong}</td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

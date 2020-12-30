import React, { Component } from "react";

export default class RenderWithMap extends Component {
  products = [
    { id: 1, name: "iphone", price: 1000 },
    { id: 2, name: "iphone X", price: 2000 },
    { id: 3, name: "iphone XS", price: 3000 },
    { id: 3, name: "iphone XS", price: 3000 },
  ];

  // renderProduct = () => {
  //     let arrJSX = [];

  //     for (let i in this.products) {
  //         // Mỗi lần duyệt lấy ra 1 đối tượng sản phẩm load từ đối tượng products tạo ra đối tượnng JSX
  //         let product = this.products[i];

  //         let JSXproduct = <div className="col-3">
  //             <div className="card">
  //                 <img className="card-img-top" src='https://picsum.photos/200'/>
  //                 <div className="card-body">
  //                     <h4 className="car-title">{product.name}</h4>
  //                     <p className="card-text">{product.price}</p>
  //                 </div>
  //             </div>

  //         </div>;

  //         arrJSX.push(JSXproduct); // đưa phần tử JSX từ dữ liệu sản phẩm
  //     }
  //     return arrJSX;
  // }

  renderProductWithMap = () => {
    const arrJSX = this.products.map((product, index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card">
            <img className="card-img-top" src="https://picsum.photos/200" />
            <div className="card-body">
              <h4 className="car-title">{product.name}</h4>
              <p className="card-text">{product.price}</p>
            </div>
          </div>
        </div>
      );
    });

    // return arrJSX;
  };

  renderTable = () => {
    return this.products.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderProductWithMap()}

          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

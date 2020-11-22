import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    imgSrc: "./img/car/products/red-car.jpg", //giá trị mặc định của state
  };

  changeColor = (newColor) => {
    this.setState({
      imgSrc: `./img/car/products/${newColor}-car.jpg`,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            {/* {Hình ảnh của xe} */}
            <img className="w-100" src={this.state.imgSrc} />
          </div>

          <div className="col-6">
            {/* {Button chọn màu xe} */}
            <div className="card">
              <div className="card-header bg-dark text-white text-center">
                Exterior color
              </div>

              <div className="card-body">
                {/* Xử lý change màu Black */}
                <div className="row mt-3 mt-3">
                  <div className="col-2">
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.changeColor("black");
                      }}
                      src="./img/car/icons/icon-black.jpg"
                      className="w-50"
                    />
                  </div>

                  <div className="col-10">
                    <h3>Black Color</h3>
                  </div>
                </div>

                {/* Xử lý change màu Red */}
                <div className="row mt-3">
                  <div className="col-2">
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.changeColor("red");
                      }}
                      src="./img/car/icons/icon-red.jpg"
                      className="w-50"
                    />
                  </div>

                  <div className="col-10">
                    <h3>Red Color</h3>
                  </div>
                </div>

                {/* Xử lý change màu Silver */}
                <div className="row mt-3">
                  <div className="col-2">
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.changeColor("silver");
                      }}
                      className="w-50"
                      src="./img/car/icons/icon-silver.jpg"
                      alt="icon-silver"
                    />
                  </div>

                  <div className="col-10">
                    <h3>Silver Color</h3>
                  </div>
                </div>

                {/* Xử lý change màu Steel */}
                <div className="row mt-3">
                  <div className="col-2">
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.changeColor("steel");
                      }}
                      className="w-50"
                      src="./img/car/icons/icon-steel.jpg"
                      alt="icon-steel"
                    />
                  </div>

                  <div className="col-10">
                    <h3>Steel Color</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

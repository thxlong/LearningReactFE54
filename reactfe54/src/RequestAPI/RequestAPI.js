import React, { Component } from "react";
import Axios from "axios";

export default class RequestAPI extends Component {
  state = {
    mangPhim: [],
  };

  //   async: Thực hiện đồng bộ
  renderPhim = async () => {
    //     //   Click vào nút load danh sách phim => gọi API
    //     const promise = Axios({
    //       url: `https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhon=GP01`,
    //       method: "GET",
    //     });
    //     promise.then((res) => {
    //       console.log(res.data);
    //       this.setState({
    //         mangPhim: res.data,
    //       });
    //     });
    //   };

    let result = await Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhon=GP01`,
      method: "GET",
    });

    this.setState({
      mangPhim: result.data,
    });
  };

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-warning mt-5"
          onClick={() => {
            this.renderPhim();
          }}
        >
          Load danh sách phim
        </button>
        <div className="row">
          {this.state.mangPhim.map((phim, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={phim.hinhAnh}
                    alt={phim.hinhAnh}
                  />
                  <div className="card-body">
                    <h4 className="card-title">Tên phim: {phim.tenPhim}</h4>
                    <p className="card-text">Mô tả: {phim.moTa}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    //   Gọi API tại componentDidMount
    this.renderPhim();
  }
}

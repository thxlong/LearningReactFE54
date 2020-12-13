import React, { Component } from "react";

export default class FormSinhVien extends Component {
  state = {
    values: {
      maSinhVien: "",
      tenSinhVien: "",
      email: "",
      soDienThoai: "",
    },

    errors: {
      maSinhVien: "",
      tenSinhVien: "",
      email: "",
      soDienThoai: "",
    },
  };

  handleChangeInput = (event) => {
    let { value, name } = event.target;
    // this.setState(
    //   {
    //     [name]: value,
    //   },
    //   () => {
    //     console.log("stateTenSinhVien", this.state);
    //   }
    // );

    // Xử lý cập nhật values

    let typeInput = event.target.getAttribute("typeInput"); // attribute là thuộc tính người dùng tự thêm trên thẻ)
    console.log("typeInput", typeInput);

    const newValues = { ...this.state.values }; //Lưu dữ lại giá trị cũ đang nhập: ví dụ đang nhập tên, xong qua nhập mã
    newValues[name] = value; //gán giá trị mới cho thuộc tính đang nhập

    //  Xử lý Errors
    const newErrors = { ...this.state.errors }; // Giữ lại các giá trị errors cũ
    newErrors[name] = value.trim() === "" ? name + " không được bỏ trống!" : "";

    if (typeInput === "email") {
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regexEmail.test(value)) {
        newErrors[name] = name + " không đúng định dạng";
      }
    }

    // set lại state
    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        console.log("setState", this.state);
      }
    );
  };

  handlerSubmit = (event) => {
    event.preventDefault(); //chặn sự kiện submit của browser khi người dùng submit = reactform
    console.log('values',this.state.values);
    console.log('errors',this.state.errors);
    // Kiểm tra dữ liệu người dùng hợp lệ

    let valid = true;
    // duyệt tất cả thuộc tính thì dùng 'for-in'
    for (let key in this.state.values) {
      if (this.state.values[key].trim() === "") {
        valid = false;
      }
    }

    // kiểm tra tất cả các thuộc tính của errors
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== ""){
        valid = false;

      }
    }

    if (!valid) {
      alert("Dữ liệu không hợp lệ!");
      return;
    }
    // Xử lý submit => api hoặc redux (dispatch) or ...
  };
  render() {
    return (
      <form className="card" onSubmit={this.handlerSubmit}>
        <div className="card-header bg-dark text-center text-white">
          <h1>Thông tin sinh viên</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <h3>Mã sinh viên</h3>
                <input
                  className="form-control"
                  name="maSinhVien"
                  onChange={this.handleChangeInput}
                />
                <p className="text text-danger">
                  {this.state.errors.maSinhVien}
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <h3>Tên sinh viên</h3>
                <input
                  className="form-control"
                  name="tenSinhVien"
                  onChange={this.handleChangeInput}
                />
                <p className="text text-danger">
                  {this.state.errors.tenSinhVien}
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <h3>Email</h3>
                <input
                  typeInput="email"
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p className="text text-danger">{this.state.errors.email}</p>
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <h3>Số điện thoại</h3>
                <input
                  typeInput="phone"
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p className="text text-danger">
                  {this.state.errors.soDienThoai}
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-success my-4" type="submit">
              Thêm sinh viên
            </button>
          </div>
        </div>
      </form>
    );
  }
}

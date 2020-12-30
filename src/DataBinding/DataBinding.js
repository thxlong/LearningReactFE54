import React from "react";

export default function DataBinding() {
  // Binding biến
  const title = "Cybersoft";
  const imgSrc = "https://picsum.photos/200/200";
  const sinhVien = {
    msSV: "0001",
    tenSinhVien: "Nguyễn Văn A",
    hinhAnh: "https://picsum.photos/200/",
  };

  //   binding hàm
  const renderImg = () => {
    // giá trị phải trả về 1 chuỗi, số, jsx (1 đoạn code html được bao phủ bởi 1 thẻ)
    // JSX là 1 đoạn code được bảo phủ bởi div
    return (
      <div>
        <h3>Hình ảnh</h3>
        <img src={sinhVien.hinhAnh} width="200" height="200" />
      </div>
    );
  };
  return (
    <div>
      <h1>DataBinding</h1>
      <p id="title" className="display-4">
        {title}
      </p>

      <img src={imgSrc} width="200" height="200" />

      <input className="form-control w-25 mt-2" value={title} />

      <hr />
      <h3>Thông tin sinh viên</h3>

      <div className="card" style={{ width: 200, height: 200 }}>
        <img className="card-img-top" src={sinhVien.hinhAnh} />
        <div className="card-body">
          <h4 className="card-title">{sinhVien.tenSinhVien}</h4>
          <p className="card-text">{sinhVien.msSV}</p>
        </div>
      </div>

      <hr />
      <div className="mt-5">{renderImg()}</div>
    </div>
  );
}

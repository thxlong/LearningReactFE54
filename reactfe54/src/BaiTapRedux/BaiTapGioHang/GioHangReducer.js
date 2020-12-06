const stateGioHang = {
  gioHang: [
    // {
    //   maSP: 1,
    //   tenSP: "IphoneX",
    //   hinhAnh: "./img/sp_iphoneX.png",
    //   giaBan: 1000,
    //   soLuong: 1,
    // },
  ],
};

export const GioHangReducer = (state = stateGioHang, action) => {
  console.log("action", action);

  switch (action.type) {
    case "THEM GIO HANG": {
      // Xử lý cập nhật state gioHang
      let gioHangCapNhat = [...state.gioHang];

      // Tìm trong giỏ hàng có sản phẩm nào có mã == sp click hay không?
      let spGioHang = gioHangCapNhat.find(
        (sp) => sp.maSP === action.sanPhamClick.maSP
      );

      if (spGioHang) {
        // Tìm thấy => tăng số lượng
        spGioHang.soLuong += 1;
      } else {
        gioHangCapNhat.push(action.sanPhamClick);
      }
      // Cập nhật lại state
      state.gioHang = gioHangCapNhat;
      // Immutable tính bất biến của redux: Giá trị state mới trả về phải khác state cũ ===> dùng toán tử 3 ngôi để sao chép giá trị cũ ra
      return { ...state };
    }

    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];
      // Tìm trong giỏ hàng có sản phẩm đó không?
      let index = gioHangCapNhat.findIndex((sp) => sp.maSP === action.maSPXoa);
      if (index !== -1) {
        gioHangCapNhat.splice(index, 1);
      }

      // Cập nhật lại state giỏ hàng
      state.gioHang = gioHangCapNhat;
      return { ...state };

      // let gioHangCapNhat = gioHangCapNhat.filter(
      //   (sp) => sp.maSP !== action.maSPXoa
      // );
      // Cập nhật lại state giỏ hàng
      // state.gioHang = gioHangCapNhat;
      // return { ...state };
    }

    case "TANG_GIAM_SO_LUONG": {
      let gioHangCapNhat = [...state.gioHang];

      // Tìm sp được click trong giỏ hàng
      let spGH = gioHangCapNhat.find((sp) => sp.maSP === action.maSPClick);
      if (spGH) {
        if ((action.soLuong === -1) & (spGH.soLuong <= 1)) {
          return state;
        } 
        spGH.soLuong += action.soLuong;
      }

      // Cập nhật lại state giỏ hang
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
  }
  return state;
};

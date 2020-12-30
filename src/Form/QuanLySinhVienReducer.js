const stateDefault = {
  mangSinhVien: [
    {
      maSinhVien: "1",
      tenSinhVien: "Nguyễn Văn A",
      email: "a@gmail.com",
      soDienThoai: "0909090909",
    },
    {
      maSinhVien: "2",
      tenSinhVien: "Nguyễn Văn B",
      email: "b@gmail.com",
      soDienThoai: "0101010101",
    },
  ],

  sinhVienSua: {
    maSinhVien: "1",
    tenSinhVien: "a",
    email: "test",
    soDienThoai: "test090",
  },
};

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      const mangSinhVienCapNhat = [...state.mangSinhVien, action.sinhVien];

      //  Thay vì: mangSinhVienCapNhat.push(action.sinhVien); thì [...state.mangSinhVien, action.sinhVien];
      return { ...state, mangSinhVien: mangSinhVienCapNhat };
    }

    case "SUA_SINH_VIEN": {
      state.sinhVienSua = { ...action.sinhVienSua };
      return { ...state };
    }

    case "XOA_SINH_VIEN": {
      let mangSinhVienCapNhat = [...state.mangSinhVien];
      //   Tìm mã sinh viên xem có ko?
      let i = mangSinhVienCapNhat.findIndex(
        (sv) => sv.maSinhVien === action.maSVXoa
      );

      if (i !== -1) {
        mangSinhVienCapNhat.splice(i, 1);
      }
      state.mangSinhVien = mangSinhVienCapNhat;
      return { ...state };
    }
  }
  return { ...state };
};

const stateDefault = {
  datCuoc: false, //True: tài, Failse: xỉu
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    { hinhAnh: "./img/img-game/1.png", diem: 1 },
    { hinhAnh: "./img/img-game/2.png", diem: 2 },
    { hinhAnh: "./img/img-game/3.png", diem: 3 },
  ],
};

export const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  return { ...state };
};

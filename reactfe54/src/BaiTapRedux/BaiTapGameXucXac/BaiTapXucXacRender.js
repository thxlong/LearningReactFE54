const stateDefault = {
  datCuoc: false, //True: tài, Failse: xỉu
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    { hinhAnh: "./img/img-game/1.png", diem: 1 },
    { hinhAnh: "./img/img-game/1.png", diem: 1 },
    { hinhAnh: "./img/img-game/1.png", diem: 1 },
  ],
};

export const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.datCuoc = action.datCuoc;
      return { ...state };
    }

    case "RANDOM_XUC_XAC": {
      console.log("action", action);
      // Randon function
      // Tạo 1 mảng xúc xắc ngẫu nhiên
      const mangXXNN = [];
      for (let i = 0; i < 3; i++) {
        const soNN = Math.floor(Math.random() * 6 + 1);
        // Từ số ngẫu nhiên tạo ra object xúc xắc
        const xxNN = { hinhAnh: `./img/img-game/${soNN}.png`, diem: soNN };
        // Thêm xúc xắc ngẫu nhiên vào mangXXNN
        mangXXNN.push(xxNN);
      }
      state.mangXucXac = mangXXNN;

      // cập nhật state soBanThang
      const tongDiem = state.mangXucXac.reduce((td, xucXac, index) => {
        return (td += xucXac.diem);
      }, 0);

      if (
        (state.datCuoc && tongDiem > 10) ||
        (!state.datCuoc && tongDiem <= 10)
      ) {
        state.soBanThang += 1;
      }

      // Cập nhật số bàn chơi
      state.soBanChoi += 1;
      return { ...state };
    }
  }

  return { ...state };
};

// File quản lý tất cả state của ứng dụng (Thay vì đặt tại componet ta đặt state tại store)
import { combineReducers, createStore } from "redux";

// import state giỏ hàng
import { GioHangReducer } from "../BaiTapRedux/BaiTapGioHang/GioHangReducer";
import { BaiTapGameXucXacReducer } from "../BaiTapRedux/BaiTapGameXucXac/BaiTapXucXacRender";
import BaiTapGameXucXac from "../BaiTapRedux/BaiTapGameXucXac/BaiTapGameXucXac";
import { QuanLySinhVienReducer } from "../Form/QuanLySinhVienReducer";

const rootReducer = combineReducers({
  // các state sau này khai báo tại đây
  // stateGioHang: (state = stateGioHang, action) => {
  //   return state;
  // },

  stateGioHang: GioHangReducer,
  stateGameXucXac: BaiTapGameXucXacReducer,
  QuanLySinhVienReducer,
});

// tạo ra store chứa rootReducer (Xem như state tổng của ứng dụng)
export const store = createStore(rootReducer);

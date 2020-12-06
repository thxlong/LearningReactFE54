import React, { Component } from "react";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import styleGame from "./BaiTapGameXucXac.module.css";

export default class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className={`${styleGame.bgGame}`}>
        {/* cách viết nếu dùng BEM : className={`${styleGame['bg-Game']}`}*/}
        <h1 className="display-4 text-center mt-5 ">BÀI TẬP GAME XÚC XẮC</h1>
        <XucXac />
        <KetQuaTroChoi />
      </div>
    );
  }
}

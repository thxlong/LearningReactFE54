import React, { Component } from "react";
import Header from "./Header";
import LapTop from "./LapTop";
import Promotion from "./Promotion";
import ProductList from "./ProductList";
import Slider from "./Slider";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList/>
        <LapTop />
        <Promotion />
      </div>
    );
  }
}

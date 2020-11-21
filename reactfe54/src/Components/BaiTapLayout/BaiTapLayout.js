import React, { Component } from "react";
import Header from "./Header";
import LapTop from "./LapTop";
import Promotion from "./Promotion";
import SmartPhone from "./Product";
import ProductList from "./ProductList";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductList />
        <SmartPhone />
        <LapTop />
        <Promotion />
      </div>
    );
  }
}

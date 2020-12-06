import logo from "./logo.svg";
import "./App.css";
import DemoFunctionComponent from "./Components/DemoFunctionComponent";
import DemoReactClassComponent from "./Components/DemoReactClassComponent";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";
import DataBindingClassComponent from "./DataBinding/DataBindingClassComponent";
import HandleEvent from "./Components/HandleEvent/HandleEvent";
import DemoState from "./DemoState/DemoState";
import BaiTapChonXe from "./BaiTapChonXe/BaiTapChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BTRenderDSPhim from "./RenderWithMap/BTRenderDSPhim";
import DemoProps from "./Props/DemoProps";
import ProductListRCC from "./Props/ProductListRCC";
import ProductList from "./Props/PropWithEvent/ProductList";
import PropsWithEvent from "./Props/PropWithEvent/PropsWithEvent";
import BaiTapGioHangRedux from "./BaiTapRedux/BaiTapGioHang/BaiTapGioHangRedux";
import BaiTapGameXucXac from "./BaiTapRedux/BaiTapGameXucXac/BaiTapGameXucXac";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <DataBindingClassComponent/> */}
      {/* <HandleEvent/> */}
      {/* <DemoState /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BTRenderDSPhim /> */}
      {/* <DemoProps /> */}
      {/* <ProductListRCC /> */}
      {/* <ProductList /> */}
      {/* <PropsWithEvent /> */}
      {/* <BaiTapGioHangRedux/> */}
      <BaiTapGameXucXac />
    </div>
  );
}

export default App;

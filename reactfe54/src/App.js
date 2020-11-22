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

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <DataBindingClassComponent/> */}
      {/* <HandleEvent/> */}
      {/* <DemoState /> */}
      {/* <BaiTapChonXe /> */}
      <RenderWithMap />
    </div>
  );
}

export default App;

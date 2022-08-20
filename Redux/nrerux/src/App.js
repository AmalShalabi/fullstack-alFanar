import React from "react";
import { Provider } from "react-redux";
import store from './redux/store'
import "./App.css";
import CaketContainer from "./components/CaketContainer";
import HooksContainer from "./components/HooksContainer";
import HooksContainer1 from "./components/HooksContainer1";
import HooksContainer2 from "./components/HooksContainer2";
import HookContainer3 from "./components/HookContainer3";
import HookContainer4 from "./components/HookContainer4";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CaketContainer />
        <HooksContainer/>
        <HooksContainer1/>
        {/* <HooksContainer2/> */}
        <HookContainer3/>
        <HookContainer4/>
        
      </div>
    </Provider>
  );
}

export default App;

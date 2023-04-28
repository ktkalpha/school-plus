import React from "react";
import "./App.css";
import LunchViewer from "./components/LunchViewer";
import User from "./components/User";
import Dday from "./components/Dday";
import Today from "./components/Today";

function App() {
  return (
    <div>
      <User></User>
      <Today></Today>
      <br></br>
      <Dday></Dday>
      <LunchViewer></LunchViewer>
    </div>
  );
}

export default App;

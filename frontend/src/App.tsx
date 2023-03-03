import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DemoPage } from "./Pages/DemoPage";
import { GamePage } from "./Pages/GamePage";

function App() {
  return (
    <div className="App">
      {/* <DemoPage/> */}
      <div>
        <GamePage />
      </div>
    </div>
  );
}

export default App;

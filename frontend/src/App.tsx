import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GamePage } from "./Pages/GamePage";
import { ScoreBoard } from "./Components/ScoreBoard";
import { Box, HStack } from "@chakra-ui/react";
import { SignupPage } from "./Pages/LoginPage/SignUp/SignupPage";

function App() {
  return (
    <div className="App">
      <GamePage />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { ScoreBoard } from "../Components/ScoreBoard";
import { Stopwatch } from "../Components/Stopwatch";
import sand from "../asset/sand.png";
import "../Components/Stopwatch.css";
import { Box, border } from "@chakra-ui/react";
import { LeaderBoard } from "../Components/LeaderBoard";
import { About } from "../Components/About";

export const GamePage = () => {
  const [score, setscore] = React.useState([]);
  return (
    <div style={{height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img style={{width:"5%"}} src={sand} alt="" />
        <h1 className="tiktok">BullsEye</h1>
      </div>
      <div className="gameMain">
        <LeaderBoard score={score} />
        <Box width={'100%'}>
        <Stopwatch setscore={setscore} score={score} />
        <About/>
        </Box>
        <ScoreBoard score={score} />
      </div>
    </div>
  );
};

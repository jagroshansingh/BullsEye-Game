import React from "react";
import { ScoreBoard } from "../Components/ScoreBoard";
import { Stopwatch } from "../Components/Stopwatch";
import sand from "../asset/sand.png";
import "../Components/Stopwatch.css";
import { border } from "@chakra-ui/react";
import { LeaderBoard } from "../Components/LeaderBoard";

export const GamePage = () => {
  const [score, setscore] = React.useState([]);

  // console.log(score)
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={sand} alt="" />
        <h1 className="tiktok">Tik Tik Tok</h1>
      </div>
      <div style={{ display: "flex", gap: "2%" }}>
        <LeaderBoard score={score} />
        <Stopwatch setscore={setscore} score={score} />
        <ScoreBoard score={score} />
      </div>
    </div>
  );
};

{
  /* <img
          style={{ width: "10%", height: "10%", border: "1px solid red" }}
          src={sand}
          alt=""
        />
        <h1 className="buttonText" style={{ border: "1px solid red" }}>
          Tik Tik Tok
        </h1> */
}

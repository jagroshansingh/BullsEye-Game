import React from "react";
import { ScoreBoard } from "../Components/ScoreBoard";
import { Stopwatch } from "../Components/Stopwatch";

export const GamePage = () => {
  const [score,setscore]=React.useState([])
  // console.log(score)
  return (
    <div>
      <Stopwatch setscore={setscore} score={score}/>
      {/* <ScoreBoard score={score}/> */}
    </div>
  );
};

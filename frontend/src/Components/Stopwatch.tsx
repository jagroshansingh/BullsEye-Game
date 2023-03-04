import { Button, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Stopwatch.css";
import "../fonts/digital-7.ttf";
import "../fonts/digital-7 (italic).ttf";
import "../fonts/digital-7 (mono italic).ttf";
import "../fonts/digital-7 (mono).ttf";
import sand from "../asset/sand.png";

export const Stopwatch = ({setscore,score}:any) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [btn, setBtn] = useState(0);
  // const [scoreBoard, setScoreBoard] = useState<Number[]>([]);
  // console.log("scoreBoard", scoreBoard);
  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  
  return (
    <div className="stopMain">
      
      <div className="stopwatch demo animated" id="box">
        <div className="numbers">
          <span className="container">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
          </span>
          <span className="container">
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </div>
        <div className="buttons">
          {btn == 0 && (
            <button
              className="buttonText"
              onClick={() => {
                setRunning(true);
                setBtn(1);
              }}
            >
              Start
            </button>
          )}
          {btn == 1 && (
            <button
              className="buttonText"
              onClick={() => {
                setRunning(false);
                setBtn(2);
                setscore((prevscore:any) => [...score, time])
                console.log(setscore);
                
              }}
            >
              Stop
            </button>
          )}
          {btn == 2 && (
            <button
              className="buttonText"
              onClick={() => {
                setTime(0);
                setBtn(0);
              }}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

import { Button, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Stopwatch.css";
import "../fonts/digital-7.ttf";
import "../fonts/digital-7 (italic).ttf";
import "../fonts/digital-7 (mono italic).ttf";
import "../fonts/digital-7 (mono).ttf";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [btn, setBtn] = useState(0);
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
    <div
      // style={{ width: "100vw", height: "100vh", backgroundColor: "#1d1f20" }}
    >
      <div className="stopwatch" id="box">
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
                console.log("btn", btn);
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
                console.log("btn", btn);
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
                console.log("btn", btn);
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

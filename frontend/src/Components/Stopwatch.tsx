import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import "./Stopwatch.css";
import "../fonts/digital-7.ttf";
import "../fonts/digital-7 (italic).ttf";
import "../fonts/digital-7 (mono italic).ttf";
import "../fonts/digital-7 (mono).ttf";

export const Stopwatch = () => {
  const [time, setTime] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  React.useEffect(() => {
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
    <div className="stopwatch">
      <div className="numbers">
        <span className="container">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="container">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        </span>
        <span className="container">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
      <div className="buttons">
        <button className="buttonText" onClick={() => setRunning(true)}>Start</button>
        <button className="buttonText" onClick={() => setRunning(false)}>Stop</button>
        <button className="buttonText" onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

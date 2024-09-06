/* 1.create buttons and text 
   2.export stopwatch.jsx to app.jsx
   3.use useffect,useState.
   4.create function to start,stop,reset,format time
*/
import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime()}</p>
      <button onClick={isRunning ? handleStop : handleStart}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
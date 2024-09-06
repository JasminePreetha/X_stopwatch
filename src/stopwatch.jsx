// import React, { useState, useEffect } from 'react';

// function Stopwatch() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let intervalId = null;

//     if (isRunning) {
//       intervalId = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     }

//     return () => {
//       if (intervalId) {
//         clearInterval(intervalId);
//       }
//     };
//   }, [isRunning]);

//   const handleStart = () => {
//     setIsRunning(true);
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//   };

//   const handleReset = () => {
//     setTime(0);
//     setIsRunning(false);
//   };

//   const formatTime = () => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div>
//       <h1>Stopwatch</h1>
//       <p>Time: {formatTime()}</p>
//       <button onClick={isRunning ? handleStop : handleStart}>
//         {isRunning ? 'Stop' : 'Start'}
//       </button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }

// export default Stopwatch;
// import React,{useState,useEffect,useRef} from 'react'
// function Stopwatch(){
//     const [isRunning,setIsRunning]=useState(false);
//     const [elaspedtime,setIselasped]=useState(0);
//     const invaltimeRef=useRef(null);
//     const starttimeRef=useRef(0);


//     useEffect(()=>{
//             if(!isRunning){
//             invaltimeRef.current=setInterval(()=>{setIselasped(Date.now()-starttimeRef.current)
            
//         },10);
//     }
//         return (()=>{clearInterval(invaltimeRef.current);
//         },[isRunning]);
    
// });

// function start(){
//     setIsRunning(true)
//     starttimeRef.current=Date.now()-elaspedtime;
// };
// function stop(){
//     setIsRunning(false)
// };

// function reset(){
//     setIselasped(0);
//     setIsRunning(false);
// };
// function formatinput(){
//     let minutes=Math.floor(elaspedtime/(1000)%60);
//     let seconds=Math.floor(elaspedtime % 1000/10);
//     return `${minutes}:${seconds}`;
// };


// return (
//     <div>
//         <h3>Stopwatch</h3>
//         <p>Time:{formatinput}</p>
//         <button onClick={isRunning ? start :stop }>Start</button>
//         <button onClick={reset}>Reset</button>
//     </div>
// );
// }
// export default Stopwatch;
import React, { useState, useEffect, useRef } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 1000);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <div>
      <h3>Stopwatch</h3>
      <p>Time: {formatTime()}</p>
      <button onClick={isRunning ? stop : start}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
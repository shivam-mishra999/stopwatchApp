import React, {useState, useEffect} from 'react';


export default function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let intervalId;
        if(isRunning){
            intervalId = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
            }, 1000)
        }else{
            clearInterval(intervalId);
        }
        return (() => clearInterval(intervalId));
    }, [isRunning]);

    const formatTime = (time) => {
        const minutes = Math.floor(time/60);
        const seconds = time % 60;

        return `${minutes}:${seconds<10 ? 0 : ""}${seconds}`;
    };

    const handleToggle = () => {
        setIsRunning(!isRunning);
    }

    const handleReset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={handleToggle}>{isRunning?"Stop":"Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

import { useState, useEffect, useRef, useSyncExternalStore } from "react";

function Stopwatch()
{
    const [isRunning, setisRunning]=useState(false);
    const [elapsedTime, setelapsedTime]=useState(0);
    const intervalRef=useRef(null);
    const startTimeRef=useRef(0);

    useEffect(()=>{
        if(isRunning)
        {
            intervalRef.current=setInterval(()=>{
                setelapsedTime(Date.now()-startTimeRef.current);
            },10);
        }
        return ()=>{
            clearInterval(intervalRef.current);
        }
    },[isRunning]);

    function start()
    {
        setisRunning(true);
        startTimeRef.current=Date.now()-elapsedTime;
    }
    function stop()
    {
        setisRunning(false);
    }
    function reset()
    {
        setelapsedTime(0);
        setisRunning(false);
    }
    function format()
    {
        let hrs=Math.floor(elapsedTime/(1000*60*60));
        let mins=Math.floor(elapsedTime/(1000*60)%60);
        let secs=Math.floor(elapsedTime/(1000)%60);
        let millisec=Math.floor((elapsedTime%1000)/10);

        hrs=String(hrs).padStart(2,"0");
        mins=String(mins).padStart(2,"0");
        secs=String(secs).padStart(2,"0");
        millisec=String(millisec).padStart(2,"0");
        return `${mins}:${secs}:${millisec}`;
    }

    return(
        <div className="container">
            <div className="display">{format()}</div>
            <div className="buttons">
                <button className="startbutton" onClick={start}>Start</button>
                <button className="stopbutton" onClick={stop}>Stop</button>
                <button className="resetbutton" onClick={reset}>Reset</button>
            </div>
        </div>
    );

}

export default Stopwatch
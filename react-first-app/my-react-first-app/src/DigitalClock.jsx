import React, {useState, useEffect} from "react"

function DigitalClock()
{
    const [time, setTime]=useState(new Date());
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date());
        },1000);
        return()=>{
            clearInterval(interval);
        }
    },[]);
    function format(){
        let hrs=time.getHours();
        const min=time.getMinutes();
        const sec=time.getSeconds();
        const mer=hrs>=12?"PM":"AM";
        hrs=hrs%12||12;
        return `${pad(hrs)}:${pad(min)}:${pad(sec)} ${mer}`
    }
    function pad(number){
        return (number<10?"0":"")+number;
    }
    return(
        <div className="container">
            <div className="clock">
                <span>{format()}</span>
            </div>
        </div>
    );
}
export default DigitalClock
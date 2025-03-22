import { useEffect, useState } from "react"

function WidthHeightWindow()
{
    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);
    useEffect(()=>
    {
        window.addEventListener("resize", handleResize)
        console.log("Event listener added");

        return(()=>{
            window.removeEventListener("resize",handleResize)
            console.log("Event listener removed");
        })
    },[])
    
    useEffect(()=>{
        document.title= `Size: ${width} * ${height}`;
    },[width,height])

    function handleResize()
    {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div>
            <h2>Width: {width}px</h2>
            <h2>Height: {height}px</h2>
        </div>
    )
}

export default WidthHeightWindow
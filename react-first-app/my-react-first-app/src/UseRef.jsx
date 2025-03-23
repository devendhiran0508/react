/*useState() - Re-renders the component when 
               the state value changes

useRef() - "ues reference" does not cause re-render when its value changes.
            When you want a component to 'remember' some information,
            but you don't want that information to trigger new renders.

1. Accessing/Interacting with DOM elements
2. Handling Focus, Animations, and Transactions
3. Managing Timers and Intervals
*/

 /*function handleClick()  while using this it renders each time
{
    setNumber(n=>n+1);
 }*/
import { useRef } from "react";
import { useEffect, useState } from "react";

function UseRef()
{
                                          // let [number, setNumber]=useState(0); 

    const inputRef1=useRef(null); 
    const inputRef2=useRef(null); 
    const inputRef3=useRef(null);         //instead of using useState here we use useRef()

    useEffect(()=>{
        console.log("Component Rendered");
    })
   

    function handleClick1()
    {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="pink";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }
    function handleClick2()
    {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="pink";
        inputRef3.current.style.backgroundColor="";
    }
    function handleClick3()
    {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="pink";
    }
    return(
        <div>
            <button onClick={handleClick1}>Click me1</button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>Click me2</button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>Click me3</button>
            <input ref={inputRef3}/>
        </div>
    );
}

export default UseRef
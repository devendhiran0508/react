import React, {useState} from 'react';

function UpdateArray()
{
    const [food, setFood]=useState(["Rice","Dosa","Chapathi"])

    function handleaddfood(){
        const newfood=document.getElementById("addfood").value;
        document.getElementById("addfood").value="";
        setFood(f=>[...f, newfood]);
    }
    function handleremovefood(index){
        setFood(food.filter((_,i)=>i!==index));
    }
    return(
        <div>
            <h2>Food Items</h2>
            <ul>
                {food.map((food, index)=> <li key={index} onClick={()=>handleremovefood(index)}>{food}</li>)}
            </ul>
            <input type="text" id='addfood' placeholder='Enter the food name'/>
            <button onClick={handleaddfood}>Add food</button>
        </div>
    );
}
export default UpdateArray
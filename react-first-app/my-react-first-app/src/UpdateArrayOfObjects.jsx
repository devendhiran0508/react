import React, {useState} from "react";

function UpdateArrayOfObjects()
{
    const [cars, setCars]=useState([]);
    const [caryear, setYear]=useState(new Date().getFullYear());
    const [carmake, setmake]=useState("");
    const [carmodel, setmodel]=useState("");

    function handleadd(){
        const newcar={Year: caryear,Make: carmake,Model: carmodel};
        setCars(c=>[...c,newcar]);

        setYear(new Date().getFullYear());
        setmake("");
        setmodel("");
    }
    function handleremove(index){
        setCars(c=>c.filter((_,i) =>i!==index));
    }
    function handleyear(event){
        setYear(event.target.value);
    }
    function handlemake(event){
        setmake(event.target.value);
    }
    function handlemodel(event){
        setmodel(event.target.value);
    }
    return(
        <div>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car,index)=>
                <li key={index} onClick={()=>handleremove(index)}>
                    {car.Year} {car.Make} {car.Model}
                </li>)}
            </ul>
            <input type="number" value={caryear} onChange={handleyear}/><br/>
            <input type="text" value={carmake} onChange={handlemake} placeholder="Enter manufacture name"/><br/>
            <input type="text" value={carmodel} onChange={handlemodel} placeholder="Enter model"/><br/>
            <button onClick={handleadd}>Add Car</button>
        </div>
    );
}
export default UpdateArrayOfObjects
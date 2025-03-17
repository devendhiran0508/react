import React, {useState} from "react";

function ToDoList()
{
    const [task, setTask]=useState([]);
    const [newtask, setNewTask]=useState("");

    function handleInput(event){
        setNewTask(event.target.value);
    }
    function addtask(){
        if(newtask.trim()!==""){
            setTask(t=>[...t,newtask]);
            setNewTask("");
        }
    }
    function removetask(index){
        const updatetask=task.filter((_,i)=>i!==index);
        setTask(updatetask);
    }
    function moveup(index){
        if(index>0)
        {
            const updatetask=[...task];
            [updatetask[index],updatetask[index-1]]=[updatetask[index-1],updatetask[index]];
            setTask(updatetask);
        }
    }
    function movedown(index){
        if(index<task.length-1)
        {
            const updatetask=[...task];
            [updatetask[index],updatetask[index+1]]=[updatetask[index+1],updatetask[index]];
            setTask(updatetask);
        }

    }

    return(
        <div className="container">
            <h1>To Do List</h1>
            <div>
                <input type="text" value={newtask} placeholder="Enter task" onChange={handleInput} />
                <button className="add-button" onClick={addtask}>Add</button>
            </div>
            <ol>
                {task.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={()=>removetask(index)}>Delete</button>
                    <button className="move-up" onClick={()=>moveup(index)}>Move Up</button>
                    <button className="move-down" onClick={()=>movedown(index)}>Move Down</button> 
                </li>
                )}
            </ol>
        </div>
    );
}
export default ToDoList
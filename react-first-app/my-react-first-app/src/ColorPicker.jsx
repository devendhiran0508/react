import React, {useState} from 'react';


function ColorPicker()
{
    const [color, setColor]=useState("#FFFFFF");

    function handleColor(event){
        setColor(event.target.value);
    }
    return(
        <div className='color-container'>
            <h1 id='colorh1'>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label>Select a color: </label>
            <input type="color" value={color} onChange={handleColor} />
        </div>
    );
}
export default ColorPicker
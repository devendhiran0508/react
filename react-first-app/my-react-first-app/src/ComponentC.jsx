import ComponentD from "./ComponentD";


function ComponentC()
{
    return(
        <div className="component-box">
            <h1>Component C</h1>
            <ComponentD/>
        </div>
    );
}

export default ComponentC
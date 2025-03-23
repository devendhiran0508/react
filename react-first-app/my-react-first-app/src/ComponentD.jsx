import { useContext } from "react";
import { userContext } from "./ComponentA";

function ComponentD()
{
    const user=useContext(userContext);

    return(
        <div className="component-box">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}

export default ComponentD
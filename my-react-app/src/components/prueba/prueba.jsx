
import { useState } from "react";


function Prueba(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState("No name");


    return (
        <form>
            <h1>{name}</h1>
            <h1>{count}</h1>
            <input type="text" name="" id="" onChange={(e) => setName(e.target.value)}/>
            <button type="button" onClick={() => {setCount(count+1)}}>Pulsa</button>
        </form>
    );
}

export default Prueba;
import { useState } from "react";

function FunComp () {

    const [count, setCount] = useState(0);

    function ClickAdd(){
        setCount(count+1);
    }

    return (


        <div>{count}
        <button onClick={ClickAdd}>+</button>
        </div>
        
    )
}

export default FunComp;
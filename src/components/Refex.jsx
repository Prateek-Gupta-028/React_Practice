import React,{useRef} from "react";

function Refex()
{
    let inputRef = useRef(null);
    const handleInput = () => {
        inputRef.current.innerHTML="1000";
    }
    return(
        <div>
            <div ref={inputRef}></div>
            <button onClick={handleInput}>Click here</button>
        </div>
    )
    
}
export default Refex;
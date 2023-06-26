import React, { useState, useEffect } from 'react';

function Effect() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(10);
    const [data2, setData2] = useState(10);
    const func = (val) => {
        if (val == "count")
            setCount(val => val + 1)
        else
            setData(val => val + 1)
    }

    useEffect(() => {
        alert("Use effect count Called : "+count);  // Called single time by []
    },[] );
   

    return (
        <div>
            <h1>Count : {count}</h1>
            <h1>Data : {data}</h1>
            <button onClick={() => func("count")}>Update Count</button>
            <button onClick={() => func("data")}>Update Data</button>
        </div>
    );
}
export default Effect;
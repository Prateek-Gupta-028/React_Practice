import React, { useState } from "react";

function Favcolor() {
    const [color, setColor] = useState(0)
    const func = () => {
         
        setColor(value => {return value+1})
    }
    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => func()}
            >Add 1</button>
            {/* <button
                type="button"
                onClick={() => setColor("red")}
            >Red</button>
            <button
                type="button"
                onClick={() => setColor("pink")}
            >Pink</button>
            <button
                type="button"
                onClick={() => setColor("green")}
            >Green</button> */}
            
        </>
    )

        // const [car, setCar] = useState({
        //   brand: "Ford",
        //   model: "Mustang",
        //   year: "1964",
        //   color: "red"
        // });
      
        // const updateColor = () => {
        //   setCar(previousState => {
        //     return { ...previousState, color: "blue" }
        //   });
        // }
      
        // return (
        //   <>
        //     <h1>My {car.brand}</h1>
        //     <p>
        //       It is a {car.color} {car.model} from {car.year}.
        //     </p>
        //     <button
        //       type="button"
        //       onClick={updateColor}
        //     >Update</button>
        //   </>
        // )
      
}
export default Favcolor
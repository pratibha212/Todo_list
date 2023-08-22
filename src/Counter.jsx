import { useState } from "react"

function Counter(){
   const[Counter,setCounter]=useState(0);
   function Increment(){
    setCounter(Counter+1)
   }
   function Decrement(){
    setCounter(Counter-1)
   }

    return(
        <>
        <button onClick={Increment} disabled={Counter===10}>Increment</button>
        <p>{Counter}</p>
        <button onClick={Decrement}disabled={Counter===0}>Decrement</button>
        </>
    )
}
export default Counter
import { useState } from "react"

function Box(){
    const[height,setHeight]=useState('')
    const[width,setWidth]=useState('')
    const[backgroundColor,setBackgroundColor]=useState('')
    const[styles,setStyles]=useState()
    function box(){
        const obj={
            width:width+"px",
            height:height+"px",
            backgroundColor:backgroundColor
        }
        setStyles(obj)
    }



    return(
        <>
        <input type="text" value={height} onChange={(e)=>setHeight(e.target.value)} />
        <input type="text"  value={width} onChange={(e)=>setWidth(e.target.value)}/>
        <input type="text" value={backgroundColor} onChange={(e)=>setBackgroundColor(e.target.value)} />
        <button onClick={box}>show</button>
        
        <div style={styles}></div>
        
        </>
    )
}
export default Box
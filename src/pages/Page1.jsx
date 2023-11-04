import { useState } from "react"


export default function Page1(){

    //the initial value is only used during the initial render of the component. Subsequent renders will use the current state value, and the initial value will not be used again.
    const[count, setCount] = useState(0);

    const decrementCount = () => {
        setCount(count-1);
    }

    const incrementCount = () => {
        setCount(count+1);
    }

    return (
        <>
            <h1 style={{textAlign:'center'}}>UseState Hooks</h1>
            <div style={{marginTop:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <button onClick={decrementCount} style={{padding:'10px'}}>-</button>
                <span style={{fontSize:'20px', margin:'10px'}}>{count}</span>
                <button onClick={incrementCount} style={{padding:'10px'}}>+</button>
            </div>
            
        </>
    )
}
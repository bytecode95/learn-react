import { useMemo, useState } from "react";

//It's important to note that while useMemo can be a performance optimization, 
//it's not always necessary. It should be used when you have computationally expensive operations that depend on specific values, 
//and you want to avoid unnecessary recalculations. In many cases, React's default behavior of re-rendering components is efficient enough.

//The useMemo hook is a feature in React that is used for memoization. Memoization is an optimization technique that involves caching the result of a function call and returning the cached result when the same inputs occur again. In the context of React, useMemo is used to memoize the result of a computation so that it is only recomputed when one of the dependencies has changed.

export default function Page3(){
    const [input, setInput] = useState('');

  // Convert the input to a number
  const parsedNumber = useMemo(() => parseInt(input, 10), [input]);

  // Calculate the square using useMemo
  const square = useMemo(() => {
    console.log('Calculating square...');
    return parsedNumber * parsedNumber;
  }, [parsedNumber]);


    return(
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a number"
        />
        <p>
          Square of {parsedNumber || '0'} is {square}
        </p>
      </div>
    )
}
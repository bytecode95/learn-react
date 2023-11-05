import { useEffect, useState } from "react"


export default function Page2(){
    //The useEffect hook is a feature in React that allows functional components to perform side effects, such as data fetching, subscriptions, or manually changing the DOM, after the component has been rendered. It is a replacement for lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
    //The useEffect hook is particularly useful for managing asynchronous operations and handling the cleanup of resources when a component unmounts.
    //The useEffect hook is used to fetch data after the component has rendered.
    //The second argument of useEffect is an array of dependencies. 
    //If the dependency array is empty ([]), the effect runs only once after the initial render. 
    //If you include dependencies, the effect will run whenever any of the dependencies change.


    const[resourceType, setResourceType] = useState('posts');
    const[items, setItem] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItem(json))
    }, [resourceType])

    return(
        <>
            <h1 style={{textAlign:'center'}}>UseEffect Hook</h1>
            <div style={{marginTop:'20px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <button onClick={()=>{setResourceType('posts')}} style={{margin:'20px', padding:'20px', backgroundColor:'red'}}>Posts</button>
                <button onClick={()=>{setResourceType('Users')}} style={{margin:'20px', padding:'20px', backgroundColor:'green'}}>Users</button>
                <button onClick={()=>{setResourceType('Comments')}} style={{margin:'20px', padding:'20px', backgroundColor:'blue'}}>Comments</button>
            </div>
            <h2 style={{textAlign:'center'}}>{resourceType}</h2>
            {items.map((item, index)=>{
                return <pre key={index}>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}
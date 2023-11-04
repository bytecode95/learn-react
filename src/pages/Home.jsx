import Page1 from "./Page1"
import { Link } from "react-router-dom"


export default function Home(){
    return(
        <>
            <div style={{textAlign:'center', marginTop:'10px'}}>
               <Link to={'/page1'} style={{fontSize:'20px', color:'black', textDecoration:'none'}}>1. UseState Hook</Link>
            </div>
        </>
    )
}
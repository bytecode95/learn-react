
import { Link } from "react-router-dom"


export default function Home(){
    return(
        <>
            <div style={{textAlign:'center', marginTop:'10px'}}>
               <Link to={'/page1'} style={{fontSize:'20px', color:'black', textDecoration:'none'}}>1. UseState Hook</Link><br /><br />
               <Link to={'/page2'} style={{fontSize:'20px', color:'black', textDecoration:'none'}}>2. UseEffect Hook</Link><br /><br />
               <Link to={'/page3'} style={{fontSize:'20px', color:'black', textDecoration:'none'}}>2. UseMemo Hook</Link>
            </div>
        </>
    )
}
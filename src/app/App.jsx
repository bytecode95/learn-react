import Navbar from "../components/Navbar"
import Page1 from "../pages/Page1"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Page2 from "../pages/Page2"
import Page3 from "../pages/Page3"

function App() {

  return (
    <>
       <Navbar/>
       <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/page1'} element={<Page1/>}/>
        <Route path={'/page2'} element={<Page2/>}/>
        <Route path={'/page3'} element={<Page3/>}/>
       </Routes>
      
    </>
  )
}

export default App

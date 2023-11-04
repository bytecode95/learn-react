import Navbar from "../components/Navbar"
import Page1 from "../pages/Page1"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"

function App() {

  return (
    <>
       <Navbar/>
       <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/page1'} element={<Page1/>}/>
       </Routes>
      
    </>
  )
}

export default App

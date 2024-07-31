import { Footer } from "./Components/Footer"
import Navbar from "./Components/Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import RegisterLogin from "./Components/RegisterLogin"

function App() {
 
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterLogin/>}/>
          <Route path="/login" element={<RegisterLogin isLogin/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App

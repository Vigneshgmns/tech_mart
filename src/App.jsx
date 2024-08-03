import { Footer } from "./Components/Footer"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RegisterLogin from "./Components/RegisterLogin"
import Home from "./Components/Home"
import AppContext from "./Components/AppContext"

function App() {

  return (
    <div className="bg-[#E2E4EB]">
      <AppContext >
        <Navbar />
      </AppContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterLogin />} />
          <Route path="/login" element={<RegisterLogin isLogin />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App

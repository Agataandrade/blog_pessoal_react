import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Login from "./assets/login/Login"
import Cadastro from "./cadastro/cadastro"



function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
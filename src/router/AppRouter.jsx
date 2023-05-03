import { Route, Routes } from "react-router-dom"
import { Portfolio,Contact } from "../pages/"
import { Navbar, Footer } from "../components/"

export const AppRouter = () => {
  return (
    <>  
        <Navbar/>
        <Routes>
            <Route path="/" element={<Portfolio/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
    </>
    
  )
}

import { Route, Routes } from "react-router-dom"
import { Portfolio } from "../pages/"
import { Navbar, Footer } from "../components/"

export const AppRouter = () => {
  return (
    <>  
        <Navbar/>
        <Routes>
            <Route path="/" element={<Portfolio/>} />
        </Routes>
        <Footer/>
    </>
    
  )
}

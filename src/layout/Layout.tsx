import { Outlet } from "react-router-dom"
import Nav from "../components/nav/Nav"
import Footer from "../components/footer/Footer"


export const Layout = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function MainLayout() {
  return (
    <div>

      <NavBar></NavBar>   
      <Outlet></Outlet>
      <Footer></Footer>
    


    </div>
  )
}
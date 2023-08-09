import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    < main className="container-layout">
        <NavBar/>
        <Outlet />
        <Footer/>
    </main>
        
  )
}

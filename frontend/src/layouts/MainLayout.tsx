import { Outlet } from 'react-router-dom'
import './MainLayout.css'
import Navbar from '../shared/components/Navbar/Navbar'
import Footer from '../shared/components/Footer/Footer'

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
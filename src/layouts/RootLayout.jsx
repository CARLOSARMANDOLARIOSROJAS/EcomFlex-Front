
import { Outlet } from 'react-router-dom'
import { NavbarHome } from '../components/Navbar'

export const RootLayout = () => {
  return (
    <div>
      <NavbarHome />
      <Outlet />
    </div>
  )
}

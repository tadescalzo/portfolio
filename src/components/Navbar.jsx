import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link 
      className="navbar--left resetLinks"
      to='/'
      >
        TaDes
      </Link>
      <div className="navbar--right resetLinks">
        <NavLink 
        className='navbar--right__link'
        to='/contacto'
        >
          Contacto
        </NavLink>
      </div>
    </nav>
  )
}

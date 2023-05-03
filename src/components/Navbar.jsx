import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar--left center">
        <li><a className="resetLinks button2" href="#">Github</a></li>
      </ul>
      <Link 
      className="navbar--center resetLinks"
      to='/'
      >
        TaDes
      </Link>
      <ul className="navbar--right center">
        <li><a className="resetLinks button1" href="#">Linkedin</a></li>
      </ul>
    </nav>
  )
}

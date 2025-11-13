import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import NavLinks from './NavLinks'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand">
          <div className="logo">
            <h3>MOVIEDB</h3>
          </div>
        </Link>
        <NavLinks />
      </div>
      <SearchBar />
    </header>
  )
}

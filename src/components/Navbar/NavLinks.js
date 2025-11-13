import {NavLink} from 'react-router-dom'
import './NavLinks.css'

export default function NavLinks() {
  return (
    <div className="navlinks">
      <NavLink exact to="/" className="navlink" activeClassName="active">
        Popular
      </NavLink>

      <NavLink to="/top-rated" className="navlink" activeClassName="active">
        Top Rated
      </NavLink>

      <NavLink to="/upcoming" className="navlink" activeClassName="active">
        Upcoming
      </NavLink>
    </div>
  )
}
